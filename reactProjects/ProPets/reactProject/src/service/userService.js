import {db} from './../config/firebase-config';
import {doc, getDoc, setDoc, updateDoc} from 'firebase/firestore'

export async function addUser(userId, email, name, avatar ='', pet ='', petAvatar='', phone='', petNickname='' ){
  try{
    await setDoc(doc(db, 'users', userId), {userId, email, name, avatar, pet, petAvatar, phone, petNickname})
    console.log('user was created')
  }catch(error){
    return Promise.reject(error.message);
  }
}

export async function getUser(uid){
  try{
    const docRef = doc(db, 'users', uid);
    const docData = await getDoc(docRef)
    if(docData.exists()){
      return docData.data();     
    }
  }catch(error){
    return Promise.reject(error.message);
  }
}

export async function updateUser(uid, user){
  try{
    const docRef = doc(db, 'users', uid);
    await updateDoc(docRef, {...user}, {merge:true})
    const docData = await getDoc(docRef)
    return docData.data()
  }catch(error){
    return Promise.reject(error.message);
  }
}