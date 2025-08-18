// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-saZBsx2riVYAE7QeqNDiFF7IA85yUqs",
  authDomain: "c-port-19d84.firebaseapp.com",
  databaseURL: "https://c-port-19d84-default-rtdb.firebaseio.com",
  projectId: "c-port-19d84",
  storageBucket: "c-port-19d84.firebasestorage.app",
  messagingSenderId: "626950838292",
  appId: "1:626950838292:web:29eb13b587c8efaff26f01",
  measurementId: "G-PLF4HFFE81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
