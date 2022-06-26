import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// firebase の初期化
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyA2fxQjtvtsWhNsipMmXrt0NgGsP4JyRv8",
    authDomain: "maiphong-todoapp.firebaseapp.com",
    databaseURL: "https://maiphong-todoapp-default-rtdb.firebaseio.com",
    projectId: "maiphong-todoapp",
    storageBucket: "maiphong-todoapp.appspot.com",
    messagingSenderId: "593679324297",
    appId: "1:593679324297:web:79175137cda2a8eafd6258",
    measurementId: "G-C6TF2JVK8J"
  };
  firebase.initializeApp(firebaseConfig);
}

