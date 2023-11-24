// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB76EZ96taA9sye9ZDd9SeRPsnOCCGyZZo",
  authDomain: "explore-bangla-8ed9d.firebaseapp.com",
  projectId: "explore-bangla-8ed9d",
  storageBucket: "explore-bangla-8ed9d.appspot.com",
  messagingSenderId: "466065564208",
  appId: "1:466065564208:web:fb8cb24e440b22dcd843f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth