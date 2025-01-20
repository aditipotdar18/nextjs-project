// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfuxu-GEyf_YjrCHM2WpIle5EC7HmB5pA",
  authDomain: "my-app2-2bbe0.firebaseapp.com",
  projectId: "my-app2-2bbe0",
  storageBucket: "my-app2-2bbe0.firebasestorage.app",
  messagingSenderId: "81800128887",
  appId: "1:81800128887:web:0bc78b2f35e6552c3a9972",
  measurementId: "G-XK7WY0GBBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db}