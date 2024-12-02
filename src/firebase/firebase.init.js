// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFWVnWkAF7JLf13xNyFVCsDztCGxsVq94",
  authDomain: "coffee-store-76473.firebaseapp.com",
  projectId: "coffee-store-76473",
  storageBucket: "coffee-store-76473.firebasestorage.app",
  messagingSenderId: "60809250312",
  appId: "1:60809250312:web:bbda5db3d086d40a51b3bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// / Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);