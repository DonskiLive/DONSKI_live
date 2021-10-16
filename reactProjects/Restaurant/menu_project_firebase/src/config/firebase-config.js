import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDqh237deMVtL_DKyxzzLfUferTIecIhtU",
	authDomain: "menuorder-bda1a.firebaseapp.com",
	projectId: "menuorder-bda1a",
	storageBucket: "menuorder-bda1a.appspot.com",
	messagingSenderId: "394094972173",
	appId: "1:394094972173:web:af0f9cebc21bb35a603444"
};

export const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb)