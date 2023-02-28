import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,

	apiKey: "AIzaSyBgpOTcHLggpARRwYIfIOAmQdWYrRpEZ74",
	authDomain: "testapi-61a25.firebaseapp.com",
	projectId: "testapi-61a25",
	storageBucket: "testapi-61a25.appspot.com",
	messagingSenderId: "627205483389",
	appId: "1:627205483389:web:732ab195e003e8d3a67a14",
	measurementId: "G-SLNKZRLEGB"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
