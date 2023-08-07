// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA3H96jQDoDPBfPvN2kywv3uew6J4CUKO8",
  authDomain: "appraisal-system-b61f6.firebaseapp.com",
  projectId: "appraisal-system-b61f6",
  storageBucket: "appraisal-system-b61f6.appspot.com",
  messagingSenderId: "636808123858",
  appId: "1:636808123858:web:0fbeb089ec3ad20f95e40b",
  measurementId: "G-J3HXM2XQRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const store = getStorage(app)
