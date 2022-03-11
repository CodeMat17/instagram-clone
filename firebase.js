// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0U309EN5OWUvSYezFZFM7n4X5hF8Sn44",
  authDomain: "insta-clone-6b899.firebaseapp.com",
  projectId: "insta-clone-6b899",
  storageBucket: "insta-clone-6b899.appspot.com",
  messagingSenderId: "17060963547",
  appId: "1:17060963547:web:f03034af1ff3c49a0698fe",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
