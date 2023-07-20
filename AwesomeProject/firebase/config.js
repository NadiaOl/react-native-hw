import * as firebase from "firebase";

import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3K1zj4bfG0Gqb7MMPQiYNAvAaY3Ne4DI",
    authDomain: "react-native-hw-acd91.firebaseapp.com",
    projectId: "react-native-hw-acd91",
    storageBucket: "react-native-hw-acd91.appspot.com",
    messagingSenderId: "511381213194",
    appId: "1:511381213194:web:057ace9675cb072bf98ff3",
    measurementId: "G-S3YQF2NGKH"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);