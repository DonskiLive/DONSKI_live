import {createSlice} from '@reduxjs/toolkit';
import {authSuccess, startLoading} from './appReducer';
import {login, registration} from './../service/authService';

const initialState = {
    error:null
}

const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setError:(state, {payload}) =>{
            state.error = payload.error
        },
        clearError: state =>{
            state.error = null;
        }
    }
});

export default auth.reducer;
export const {setError, clearError} = auth.actions;

export function loginAction(email,password){
  
    return async dispatch =>{
        dispatch(startLoading());
        dispatch(clearError());
        try{
            await login(email, password);
            dispatch(authSuccess());
        }catch(error){
            dispatch(setError({error:'wrong email or password'}))
        }
    }
}

export function registrationAction(email, password, name){
    return async dispatch =>{
        console.log(email, password, name)
        dispatch(startLoading());
        dispatch(clearError());
        try{
            await registration(email, password, name);
            dispatch(authSuccess());
        }catch(error){
            dispatch(setError({error:error.message}))
        }
    }
}

export const errorSelector = state =>state.auth.error;
