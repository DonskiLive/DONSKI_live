import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBMl-CG8cou4cMranaCFDDpwvQG2NI-h8w",
    authDomain: "propets-a542c.firebaseapp.com",
    projectId: "propets-a542c",
    storageBucket: "propets-a542c.appspot.com",
    messagingSenderId: "351810379698",
    appId: "1:351810379698:web:16059f11a00c7571ea8eab"
  };

  export const fb = initializeApp(firebaseConfig)
  export const db = getFirestore(fb)
  export const storage = getStorage(fb)