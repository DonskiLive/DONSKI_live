import {db} from './../config/firebase-config';
import {doc, collection, setDoc, orderBy, getDocs} from 'firebase/firestore'

export async function addLostItem({userId, postId, nickname, type, gender, breed='', color, height, img, phone, email, features ='', description='', location, ownerName, created} ={}){
    try{

        await setDoc(doc(db, 'losts', postId),({userId,postId, nickname, type, gender, breed, color, height, img, phone, email, features, description, location, ownerName, created}, {merge:true}));

        console.log("Document successfully written!");
        return ({userId,postId, nickname, type, gender, breed, color, height, img, phone, email, features, description, location, ownerName, created})
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export async function getAllLosts(){
    try{
        const losts = [];
        const querySnapshot = await getDocs(collection(db, "losts"), orderBy('created'));
        console.log(querySnapshot);
        if (querySnapshot) {
            querySnapshot.forEach(doc => {
                losts.push(doc.data());
            });
        }
        return losts;


    }catch(error){
        return Promise.reject(error.message);
    }
}