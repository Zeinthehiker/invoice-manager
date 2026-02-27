// Firebase configuration for whitebox-invoices
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDg1KmPiHv21I3hntUDiDw8dvRj2TIdoTU",
  authDomain: "whitebox-invoices.firebaseapp.com",
  projectId: "whitebox-invoices",
  storageBucket: "whitebox-invoices.firebasestorage.app",
  messagingSenderId: "227862273830",
  appId: "1:227862273830:web:c69cc4240b571a8b692be7",
  measurementId: "G-KCGJENTK82"
};

let db = null;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("Firebase connected successfully");
} catch (error) {
  console.warn("Firebase initialization failed, using localStorage fallback:", error);
}

export { db };
