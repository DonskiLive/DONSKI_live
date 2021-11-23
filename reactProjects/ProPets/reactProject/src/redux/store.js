import {combineReducers} from 'redux';
import appReducer from './appReducer';
import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import postsReducer from './postsReducer';
import userReducer from './userReducer';
import lostsReducer from './lostsReducer'

const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer,
    auth: authReducer,
    user: userReducer,
    losts: lostsReducer
});

const store = configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),

})

export default store;



