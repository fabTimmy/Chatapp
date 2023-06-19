// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_PUBLIC_API_KEY,
  authDomain: process.env.REACT_APP_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PUBLIC_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PUBLIC_MESSSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PUBLIC_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const provider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

export { auth, provider, googleProvider, app, db }