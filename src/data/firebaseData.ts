import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtxh_wAPsl8ADFLefDB8l79sI8C8ld_YA",
    authDomain: "superchat-b8348.firebaseapp.com",
    projectId: "superchat-b8348",
    storageBucket: "superchat-b8348.appspot.com",
    messagingSenderId: "298169515045",
    appId: "1:298169515045:web:bdc8fc921be027857253cc",
    measurementId: "G-BP57SVGY41"
});



const dataBase = firebase.firestore();
const auth = firebase.auth();
export { dataBase, auth };