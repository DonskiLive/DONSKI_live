import {db} from './../config/firebase-config';
import {doc, getDoc, setDoc, updateDoc, getDocs, collection, query, orderBy} from 'firebase/firestore'

export async function addPostItem({ postId, title, text, userId, likes, comments, img, petAvatar, userName = 'Anonym', petNickname, created } = {}) {
    try {
        await setDoc(doc(db, 'posts', postId),{ postId, title, text, userId, likes, comments, img, petAvatar, userName, petNickname, created })
        
        return ({ postId, title, text, userId, likes, comments, img, petAvatar, userName, petNickname, created })

    } catch (error) {
        console.log(error.message);
    }
}

export async function getAllPosts() {
    try {
        const posts = [];
        const q = query(collection(db, "posts"), orderBy('created'))
        const querySnapshot = await getDocs(q)
        if (querySnapshot) {
            querySnapshot.forEach(doc => {
                console.log(doc.id, " => ", doc.data())
                posts.push(doc.data());
            });
        }
        console.log(posts)
        return posts;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export async function postLikeChange(postId, uid) {
    try {
        console.log(postId, uid)
        const docRef = doc(db, 'posts', postId);
        const postData = (await getDoc(docRef)).data();

        const userLiked = postData.likes.users.find(user => user === uid);
        const oldUsers = postData.likes.users;
        console.log(userLiked)

        if (userLiked) {
            await updateDoc(docRef, {
                "likes": {                   
                    users: oldUsers.filter(user => user !== uid),
                    count: oldUsers.length,
                }
            })
        } else {
            await updateDoc(docRef,{
                ...postData,
                "likes": {
                    count: oldUsers.length +1,
                    users: [...oldUsers, uid]
                }

            })
        }
        console.log("Document successfully updated!");
    } catch (error) {
        console.log(error.message);
    }
}

export async function postAddCommit(postId, comments) {
    try {
        console.log(postId, comments)
        const docRef = doc(db, 'posts', postId);
        await updateDoc(docRef,{
            "comments": comments
        })
        console.log("Comment successfully added!");
    } catch (error) {
        console.log(error.message);
    }
}
