// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fullstack-mern-d19bb.firebaseapp.com",
  projectId: "fullstack-mern-d19bb",
  storageBucket: "fullstack-mern-d19bb.appspot.com",
  messagingSenderId: "794230737987",
  appId: "1:794230737987:web:2fd2ee9502ada1a0ac18f6",
  measurementId: "G-QG2NRH8N2M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
