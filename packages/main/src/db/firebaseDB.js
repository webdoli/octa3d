import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCenNpot99aC2sKNgvhimgx9LS4c3rtJcA",
    authDomain: "octa3d-439a2.firebaseapp.com",
    projectId: "octa3d-439a2",
    storageBucket: "octa3d-439a2.appspot.com",
    messagingSenderId: "153969037273",
    appId: "1:153969037273:web:2168b88e727c1d6a3e93c8",
    measurementId: "G-STRP22YH3W"
};

const app = initializeApp( firebaseConfig );

const db = getFirestore( app );
const auth = getAuth();
const timestamp = Timestamp;
const storage = getStorage( app );



export { db, auth, timestamp, storage }