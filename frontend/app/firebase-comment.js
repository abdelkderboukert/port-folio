import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_IPA_KEY,
    authDomain: "port-folio-3c282.firebaseapp.com",
    projectId: "port-folio-3c282",
    storageBucket: "port-folio-3c282.firebasestorage.app",
    messagingSenderId: "739268372716",
    appId: "1:739268372716:web:f220580d1e265baa059dc9",
    // measurementId: "G-FPK8XBQDDN"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };