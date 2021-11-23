import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    isLoading: false,
    auth: false
}

const appReducer = createSlice({
    name:'app',
    initialState,
    reducers:{
        initApp: state =>{   
            state.auth = localStorage.getItem('LOCAL_ID') !==null;
        },
        startLoading: state =>{
            state.isLoading = true;
        },
        stopLoading: state =>{
            state.isLoading = false
        },
        authSuccess: state =>{
            state.auth = localStorage.getItem('LOCAL_ID') !==null;
        },
        appLogout: state =>{
            state.auth = false;
        }
    }
});

export default appReducer.reducer;
export const{startLoading, stopLoading, authSuccess, appLogout, initApp} = appReducer.actions;
export const appSelector = state => state.app;
