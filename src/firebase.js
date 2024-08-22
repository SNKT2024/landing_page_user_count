// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-4d98WvN8MV-aaELUCNFC9PK72Si9-uI",
  authDomain: "landing-page-eba05.firebaseapp.com",
  projectId: "landing-page-eba05",
  storageBucket: "landing-page-eba05.appspot.com",
  messagingSenderId: "968562929106",
  appId: "1:968562929106:web:8ec6373fec21e4f42dec0b",
  measurementId: "G-C6X3XY2QPJ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export { db };
