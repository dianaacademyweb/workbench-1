
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2hVJpYGkZXs0BZZ4K3eykw62eyfJ4frw",
  authDomain: "dianaconnect-5a449.firebaseapp.com",
  projectId: "dianaconnect-5a449",
  storageBucket: "dianaconnect-5a449.appspot.com",
  messagingSenderId: "329563842645",
  appId: "1:329563842645:web:e2deee323644ad1b760cdc",
  measurementId: "G-J4F48L4G62"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);