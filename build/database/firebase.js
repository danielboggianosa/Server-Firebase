"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");
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
exports.default = firebase;
