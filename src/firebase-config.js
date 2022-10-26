import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB0b4UO7fqdzqr2Ps1kFZQz_U5-j6D0dl0",
    authDomain: "miniproject-2b282.firebaseapp.com",
    projectId: "miniproject-2b282",
    storageBucket: "miniproject-2b282.appspot.com",
    messagingSenderId: "197042195087",
    appId: "1:197042195087:web:fead8a1932dd148f2d7efa",
    measurementId: "G-B2TQ7JGQPV"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)