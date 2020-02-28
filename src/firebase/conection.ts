// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoERnFTfWtXe6ny_h143TDjd_2yHe37iw",
    authDomain: "node-server-1c823.firebaseapp.com",
    databaseURL: "https://node-server-1c823.firebaseio.com",
    projectId: "node-server-1c823",
    storageBucket: "node-server-1c823.appspot.com",
    messagingSenderId: "97660020875",
    appId: "1:97660020875:web:6c3010b7f2c76691cacc8e",
    measurementId: "G-BDDTKGBWQF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);