
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZzbXilEbCEi29aim0Q61WefZAjDHSKHI",
  authDomain: "college-admission-system-b7798.firebaseapp.com",
  projectId: "college-admission-system-b7798",
  storageBucket: "college-admission-system-b7798.firebasestorage.app",
  messagingSenderId: "114323292723",
  appId: "1:114323292723:web:6a16a9330bb9235fc7d946",
  measurementId: "G-T9EK2HKR46"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);
