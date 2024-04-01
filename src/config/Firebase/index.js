import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import {
    collection,
    addDoc,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDLcVNIiqAXNIjrKIsZeMSGjTSqzV_kavI",
  authDomain: "wonder-craft-c44b5.firebaseapp.com",
  projectId: "wonder-craft-c44b5",
  storageBucket: "wonder-craft-c44b5.appspot.com",
  messagingSenderId: "232582065789",
  appId: "1:232582065789:web:b7c0ed9c29a6bd6d1d4b14",
  measurementId: "G-NZ90JXPN16"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    storage,
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    db,
    collection,
    addDoc,
    onSnapshot,
    orderBy,
    query,
}
