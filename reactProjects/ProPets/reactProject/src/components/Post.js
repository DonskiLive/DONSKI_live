import React from 'react'
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postsSelector, getAllPostsAction } from '../redux/postsReducer';
import Row from 'react-bootstrap/Row';
import Img from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { likeCountChange, addPostCommentAction } from './../redux/postsReducer'
import { userSelector } from '../redux/userReducer';
import { checkLike } from './Posts';
import Loader from './Loader';



const Post = () => {
    const { id } = useParams();
    const [comment, setComment] = useState('');
    const user = useSelector(userSelector)
    const dispatch = useDispatch();

    const posts = useSelector(postsSelector);
    const index = posts.findIndex(p => p.postId === id);
    const post = posts[index];
    

    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false)

   

    useEffect(()=>{
        if(posts.length === 0){
            dispatch(getAllPostsAction())         
        }
    }, [dispatch, posts])

    useEffect(() => {
        if(posts.length !== 0){
        setIsLiked(checkLike(post, user.userId))
        setLikes(post.likes.count)
        }
    }, [ posts, post, user.userId])


    return (  
        <>
        {!post ? <Loader /> :
        <Col xl={8} className="posts_component">
            <Row className='align-items-center'>
                <div className='col-2 p-4'>
                    <div className='pet_avatar'>
                        <img src={post.petAvatar} alt ={post.petNickname}></img>
                    </div>
                </div>
                <div className='user_name col-8'>
                    <h3>{post.petNickname} & {post.userName}</h3>
                    <small>{post.date}</small>
                </div>
            </Row>
            <Row className='mb-4'>
                <Img variant="top" src={post.img} />
            </Row>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            <Row className="justify-content-end align-items-center" >
                <div className="post_likes fs-4 p-0">
                    {likes} </div>
                {isLiked ?
                    <FaThumbsUp className="fs-5 col-1 p-0 like_item" />
                    :
                    <FaRegThumbsUp className="fs-5 col-1 p-0 like_item" />
                }
                <Button className="col-2 like_btn m-0" onClick={
                    (e) => {
                        e.preventDefault()
                        if (!isLiked) {
                            setLikes(likes + 1);
                            setIsLiked(true);
                            console.log(likes)
                            
                        } else {
                            setLikes(likes - 1);
                            setIsLiked(false);
                        }
                        dispatch(likeCountChange(post.postId, user.userId)) //postLikeChange
                    }}
                >{isLiked ? 'dislike' : 'add like'}</Button>
            </Row>
            <Row className="border-bottom comments">
                <h4>Comments</h4>
            </Row>
            { post.comments.map((c, index) =>
                <div key={index}>
                    <Row className='mt-3'>
                        <h5 >{c.author} | <small>{c.date} </small> </h5>
                    </Row>
                    <Row className='mb-3'>
                        <p>{c.comment}</p>
                    </Row>
                    <hr />
                </div>
            )
            }
            <Form name="comment" className="mt-5" onSubmit={e => {
                e.preventDefault();
                const date = moment().format("LL");
                const comments = [...post.comments];
                comments.push({ author: user.name, date, comment })
                dispatch(addPostCommentAction(post.postId, comments));
                setComment('');

            }}>
                <Form.Group className="mb-2 d-flex" controlId="post_comment">
                    <Form.Control className="comment_input mx-1"
                        value={comment}
                        as="textarea" rows={3}
                        onChange={e => setComment(e.target.value)}
                        placeholder="type your comment" />
                </Form.Group>
                <Row className="justify-content-end">
                    <Button className="col-3 like_btn m-0"
                        type="submit"
                    >add comment</Button>
                </Row>
            </Form>

        </Col>
        }</> 
    )

}

export default Post;

