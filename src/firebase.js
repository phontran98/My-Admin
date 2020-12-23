import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSbRgKPG3gVzOJa_nIYtYXkStxk5IbdA4",
    authDomain: "admin-bb91a.firebaseapp.com",
    projectId: "admin-bb91a",
    storageBucket: "admin-bb91a.appspot.com",
    messagingSenderId: "803102894095",
    appId: "1:803102894095:web:75bc70888909920d0ddb7a",
    measurementId: "G-EL46K8CLS0"
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore()

export default firebase;