// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbzt9D5LisfZp1YJ3atvhlP4n7YgAovMM",
  authDomain: "vibesync-101.firebaseapp.com",
  projectId: "vibesync-101",
  storageBucket: "vibesync-101.firebasestorage.app",
  messagingSenderId: "839180479882",
  appId: "1:839180479882:web:535ebf99c3feea21a86c73",
  measurementId: "G-Z2TSHNHKQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth
const auth = getAuth(app);
export { auth, isSignInWithEmailLink, signInWithEmailLink };