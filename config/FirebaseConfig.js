// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "sandeepguruji2025.firebaseapp.com",
  projectId: "sandeepguruji2025",
  storageBucket: "sandeepguruji2025.firebasestorage.app",
  messagingSenderId: "294514035442",
  appId: "1:294514035442:web:b765e8534c31907e2ade6b",
  measurementId: "G-3MH7SVPZS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getfirestore(app)
