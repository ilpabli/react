import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-OPeu1SAlKUNyOdue-PpcFeglKzzUytY",
  authDomain: "cfownage-87e22.firebaseapp.com",
  projectId: "cfownage-87e22",
  storageBucket: "cfownage-87e22.appspot.com",
  messagingSenderId: "386839066602",
  appId: "1:386839066602:web:e5872beec8ef2ca0a56493",
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
