// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGyJ9qyAjJne71ZbzleLmkW0-w5PxjVmY",
  authDomain: "svvv-connect-1.firebaseapp.com",
  projectId: "svvv-connect-1",
  storageBucket: "svvv-connect-1.appspot.com",
  messagingSenderId: "227554425098",
  appId: "1:227554425098:web:f94574a6e61769d5cf22f3",
  measurementId: "G-Q2YZYJ69XB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export default {app , auth };