// Firebase Web SDK (moderno)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBllnLcIJ_WWwVTsy8PEL7wcS-Hv74SVc",
  authDomain: "armazenarpessoas.firebaseapp.com",
  databaseURL: "https://armazenarpessoas-default-rtdb.firebaseio.com",
  projectId: "armazenarpessoas",
  storageBucket: "armazenarpessoas.firebasestorage.app",
  messagingSenderId: "696315031217",
  appId: "1:696315031217:web:73d8bfcee726c14eadbc90",
  measurementId: "G-NERP0GPWY9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, updateDoc, deleteDoc, doc };
