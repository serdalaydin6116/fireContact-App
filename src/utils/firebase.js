// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVdSiLCoBtyX4ZjqlYuFnAMofMZCtPtMY",
  authDomain: "firecontact-app-6d7b4.firebaseapp.com",
  databaseURL: "https://firecontact-app-6d7b4-default-rtdb.firebaseio.com",
  projectId: "firecontact-app-6d7b4",
  storageBucket: "firecontact-app-6d7b4.appspot.com",
  messagingSenderId: "595396761781",
  appId: "1:595396761781:web:01f5df1af800c0627086fc"
};

// Initialize Firebase
const firebase= initializeApp(firebaseConfig);
export default firebase;


