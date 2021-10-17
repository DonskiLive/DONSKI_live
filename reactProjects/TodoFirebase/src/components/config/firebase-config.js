import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "",
	authDomain: "personaltodo-b0b8f.firebaseapp.com",
	projectId: "personaltodo-b0b8f",
	storageBucket: "personaltodo-b0b8f.appspot.com",
	messagingSenderId: "562804725023",
	appId: ""
};

export const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb)