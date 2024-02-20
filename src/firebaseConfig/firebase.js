import { firebase } from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDWq1LiLprMyHQg6iJwR8eVdp8331Ov490",
    authDomain: "portfolio-97384.firebaseapp.com",
    projectId: "portfolio-97384",
    storageBucket: "portfolio-97384.appspot.com",
    messagingSenderId: "901531360004",
    appId: "1:901531360004:web:b359b18d5ac14d7a460e51",
    measurementId: "G-LER2W9NT4C",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage };
