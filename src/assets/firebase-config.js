// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY , /*Create a .env file to protect these*/
  authDomain: "task-fighter-5ace4.firebaseapp.com",
  projectId: "task-fighter-5ace4",
  storageBucket: "task-fighter-5ace4.appspot.com",
  messagingSenderId: "459909713403",
  appId: "1:459909713403:web:e21f422afe1f0573994f5e",
  measurementId: "G-FQ5C4CZC7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()
export const auth = getAuth(app)

