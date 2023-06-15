// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuAiYsfgR5-YgovuKH1gZnJnpp8WbInoA",
  authDomain: "chatapp-ac143.firebaseapp.com",
  projectId: "chatapp-ac143",
  storageBucket: "chatapp-ac143.appspot.com",
  messagingSenderId: "403669407339",
  appId: "1:403669407339:web:be83236323505ce766432e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const provider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

export { auth, provider, googleProvider, app, db }