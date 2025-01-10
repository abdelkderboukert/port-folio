import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
  // authDomain: "portofolio-web-3e8e8.firebaseapp.com",
  // projectId: "portofolio-web-3e8e8",
  // storageBucket: "portofolio-web-3e8e8.appspot.com",
  // messagingSenderId: "25195509306",
  // appId: "1:25195509306:web:2b635dcf997137bf612703"
  apiKey: "AIzaSyAcIL-e0HfP4ZHAePFlTQIrOZX4sqqS6_U",
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
