import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "marolio-forever.firebaseapp.com",
  projectId: "marolio-forever",
  storageBucket: "marolio-forever.appspot.com",
  messagingSenderId: "471106468556",
  appId: "1:471106468556:web:b14395f50013cfb6eaa069"
};

// "AIzaSyDFp9mZwvvwkrQjtQTmM-B9D5PZkJcGhSc"

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);