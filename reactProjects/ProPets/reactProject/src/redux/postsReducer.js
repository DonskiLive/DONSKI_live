import {createSlice} from '@reduxjs/toolkit';
import {startLoading, stopLoading} from './appReducer';
import {getAllPosts, addPostItem, postLikeChange, postAddCommit} from '../service/postsService';
import {checkLike} from './../components/Posts';
import moment from 'moment';

const initialState = {
    posts:[]
}

const postsReducer = createSlice({
    name:'posts',
    initialState,
    reducers:{
        setPosts:(state,{payload})=>{
            state.posts = payload.posts
        },
        addPost:(state,{payload}) =>{
            console.log(payload.post)
            state.posts.unshift(payload.post)
        },
        addComment:(state,{payload})=>{
            console.log(payload)
            const index = state.posts.findIndex(p=>p.postId === payload.postId);
            const post = state.posts[index];
            post.comments = payload.comments;
            state.posts[index] = post;
        },
        likeChange:(state, {payload})=>{
            console.log(payload);
            const index = state.posts.findIndex(p=>p.postId === payload.postId);
            const post = state.posts[index];
            const like = checkLike(post, payload.uid);
            if(like){
                post.likes.count -=1;
                post.likes.users = post.likes.users.filter(user => user !== payload.uid )
            }else{
                post.likes.count +=1;
                post.likes.users.push(payload.uid)
            }
            state.posts[index] = post;
        }
    }
});

export const {addPost,setPosts, addComment, likeChange} = postsReducer.actions;

export function getAllPostsAction(){
    return async dispatch =>{
        dispatch(startLoading());
        try{
            const response = await getAllPosts();
            dispatch(setPosts({posts:response.reverse()}));
            console.log(response)
        }catch(error){
            console.log(error);     
        }finally{
            dispatch(stopLoading());
        }
    }
}

export function addPostAction(post){
    return async dispatch =>{
        console.log('start add post loading')
        try{
            const response = await addPostItem(post);
            post.created = moment().format("LL");
            dispatch(addPost({post}));
            console.log(response);           
        }catch(error){
            console.log(error)
        }
    }
}

export function likeCountChange(postId, uid){
    return async dispatch =>{
        try{
            dispatch(likeChange({postId, uid}));
            await postLikeChange(postId, uid);
        }catch(error){
            console.log(error)
        }
    }
}

export function addPostCommentAction(postId, comments){
    return async dispatch =>{
        try{
            dispatch(addComment({postId, comments}))
            await postAddCommit(postId, comments);
        }catch(error){
            console.log(error)
        }
    }

}

export default postsReducer.reducer;
export const postsSelector = state =>state.posts.posts;




