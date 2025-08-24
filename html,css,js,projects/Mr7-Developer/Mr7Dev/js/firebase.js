import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider

} from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js'

import {
  doc,
  setDoc,
  getFirestore,
  getDoc
} from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js';




// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCx2BxtY_79RrOAScpHVEvC-zVuWN2kjg0",
  authDomain: "learning-projects-d352d.firebaseapp.com",
  projectId: "learning-projects-d352d",
  storageBucket: "learning-projects-d352d.firebasestorage.app",
  messagingSenderId: "477436242655",
  appId: "1:477436242655:web:87608f3da687062545976a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  googleProvider,
  GoogleAuthProvider,
  signInWithPopup,
  facebookProvider,
  FacebookAuthProvider,
  doc,
  setDoc,
  db,
  getDoc
}


