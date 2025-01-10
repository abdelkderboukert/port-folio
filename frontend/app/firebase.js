import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_IPA_KEY,
  authDomain: "port-folio-3c282.firebaseapp.com",
  projectId: "port-folio-3c282",
  storageBucket: "port-folio-3c282.firebasestorage.app",
  messagingSenderId: "739268372716",
  appId: "1:739268372716:web:f220580d1e265baa059dc9",
  measurementId: "G-FPK8XBQDDN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
