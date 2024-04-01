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
    apiKey: "AIzaSyBl5DFQGotvMIjfLtKe5fxneaukVL-gQKU",
    authDomain: "test-project-login-signup.firebaseapp.com",
    projectId: "test-project-login-signup",
    storageBucket: "test-project-login-signup.appspot.com",
    messagingSenderId: "631094519016",
    appId: "1:631094519016:web:b9c0e7d3d9b4666988955d",
    measurementId: "G-BF6S9S8CRG"
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
