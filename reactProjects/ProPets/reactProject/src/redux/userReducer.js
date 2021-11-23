import { createSlice } from '@reduxjs/toolkit';
import { startLoading, stopLoading } from './appReducer';
import { getUser, updateUser } from './../service/userService'

const initialState = {
    userId: '',
    name: '',
    avatar: '',
    email: '',
    phone: '',
    pet: '',
    petNickname: '',
    petAvatar: ''
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.name = payload.response.name;
            state.userId = payload.response.userId;
            state.email = payload.response.email;
            state.avatar = payload.response.avatar;
            state.phone = payload.response.phone;
            state.pet = payload.response.pet;
            state.petNickname = payload.response.petNickname;
            state.petAvatar = payload.response.petAvatar;
        },
        update:(state, {payload})=>{
            state.email = payload.response.email;
            state.avatar = payload.response.avatar;
            state.phone = payload.response.phone;
            state.pet = payload.response.pet;
            state.petNickname = payload.response.petNickname;
            state.petAvatar = payload.response.petAvatar;
        }
    
    }
});

export const { setUser, update } = userReducer.actions;

export function getUserAction(uid) {
    return async dispatch => {
        dispatch(startLoading());
        try {
            const response = await getUser(uid);
            dispatch(setUser({ response }));
        } catch (error) {
            console.log(error);       
        }
        dispatch(stopLoading());
    }
}

export function updateUserAction(user, uid){
    return async dispatch => {
        dispatch(startLoading());
        try {
            const response = await updateUser(user, uid);
            dispatch(update({ response }));
        } catch (error) {
            console.log(error);     
        }finally{
            dispatch(stopLoading());
        }
    }
}

export default userReducer.reducer;
export const userSelector = state => state.user;