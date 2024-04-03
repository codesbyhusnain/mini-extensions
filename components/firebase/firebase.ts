// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { /* connectFirestoreEmulator, */ getFirestore } from 'firebase/firestore';
import { /* connectStorageEmulator, */ getStorage } from 'firebase/storage';
// import { isDev } from '../isDev';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzEGkAJkiZWp-KkAVm6zwVAYF-YG3yrN8",
    authDomain: "mini-extensions-4482b.firebaseapp.com",
    projectId: "mini-extensions-4482b",
    storageBucket: "mini-extensions-4482b.appspot.com",
    messagingSenderId: "1048106222990",
    appId: "1:1048106222990:web:a0cdf3a797149c8604d0df",
    measurementId: "G-QMQ8KZDVDB"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const baseBucketName = 'mini-extensions-4482b.appspot.com';

/* if (isDev) {
    connectFirestoreEmulator(firestore, '127.0.0.1', 8081);
} */
