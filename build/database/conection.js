"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = __importStar(require("firebase/app"));
// Add the Firebase services that you want to use
require("firebase/auth");
require("firebase/firestore");
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
const fb_conn = firebase.initializeApp(firebaseConfig);
exports.default = fb_conn;
