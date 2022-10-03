import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfYTwpB8MiYe-I6rcQ8iiVOIOWhfWWsHg",
    authDomain: "test-1-16a93.firebaseapp.com",
    projectId: "test-1-16a93",
    storageBucket: "test-1-16a93.appspot.com",
    messagingSenderId: "506073616318",
    appId: "1:506073616318:web:38a467cb56cbba08d173ef"
  };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

