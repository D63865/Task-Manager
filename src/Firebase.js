// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfF0uxd8LctxKXOSqeDNYEJFnEYk6qaqA",
  authDomain: "todoapp-516f4.firebaseapp.com",
  projectId: "todoapp-516f4",
  storageBucket: "todoapp-516f4.appspot.com",
  messagingSenderId: "618220840893",
  appId: "1:618220840893:web:3051ab69a5b4ebd43d94d4",
  measurementId: "G-LN26LCJ5XJ"
};
// Initialize Firebase
const app=initializeApp(firebaseConfig);

export const db=getFirestore(app);