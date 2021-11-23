import {fb} from '../config/firebase-config';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth'
import {addUser} from './userService'

const auth = getAuth(fb)

export async function login(email, password){
    try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem('LOCAL_ID', response.user.uid);       
    }catch(error){
        return Promise.reject(error);
    }
}

export async function registration(email, password, name){
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        localStorage.setItem('LOCAL_ID', response.user.uid);
        await addUser(response.user.uid, email, name);
    }catch(error){
        return Promise.reject(error);
    }
}

export async function logout(){
    try{
        await signOut(auth);
        localStorage.removeItem('LOCAL_ID');
    }catch(error){
        return Promise.reject(error);
    }
    
}