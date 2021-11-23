import {createSlice} from '@reduxjs/toolkit';
import {startLoading, stopLoading} from './appReducer';

import {addLostItem, getAllLosts} from './../service/lostsService';

const initialState = {
    losts:[]
}

const lostsReducer = createSlice({
    name: 'losts',
    initialState,
    reducers:{
        setLosts:(state, {payload})=>{
            state.losts = payload.losts
        },
        addLost:(state, {payload}) =>{
            state.losts.unshift(payload.lost)
        }
    }
});

export const {addLost, setLosts} = lostsReducer.actions;

export function getAllLostsAction(){
    return async dispatch =>{
        dispatch(startLoading());
        console.log('losts')
        try{
            const response = await getAllLosts();
            dispatch(setLosts({losts:response.reverse()}));
            dispatch(stopLoading());
        }catch (error){
            console.log(error);
            dispatch(stopLoading());
        }
    }
}
export function addLostAction(lost){
    return async dispatch =>{
        dispatch(startLoading())
        try{
            dispatch(addLost({lost}));
            await addLostItem(lost);
            dispatch(stopLoading());
        }catch(error){
            dispatch(stopLoading());
            console.log(error)
        }
    }
}

export default lostsReducer.reducer;
export const lostsSelector = state => state.losts.losts