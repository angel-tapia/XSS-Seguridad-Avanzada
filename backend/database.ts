// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnKru4zSHhtDhoeeXTlqgCPnWxDYGR33I",
  authDomain: "seguridad-av-tapia.firebaseapp.com",
  projectId: "seguridad-av-tapia",
  storageBucket: "seguridad-av-tapia.appspot.com",
  messagingSenderId: "115373302369",
  appId: "1:115373302369:web:191a336e31edf29edc8020",
  measurementId: "G-Z1HKFT9H07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };