import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjSY9rBrqTNM45gy4BJKi025JD6ZysJ4Q",
    authDomain: "linkedin-clone-6132e.firebaseapp.com",
    projectId: "linkedin-clone-6132e",
    storageBucket: "linkedin-clone-6132e.appspot.com",
    messagingSenderId: "46684676521",
    appId: "1:46684676521:web:10ddfe1947c3386f2aa4b8",
    measurementId: "G-G111S3B71F"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };