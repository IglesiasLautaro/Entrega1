import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfItbNKi9HK-bn3496QX5C54tDrlC3wNI",
  authDomain: "coderhouse-ecommerce-b803d.firebaseapp.com",
  projectId: "coderhouse-ecommerce-b803d",
  storageBucket: "coderhouse-ecommerce-b803d.appspot.com",
  messagingSenderId: "245388139985",
  appId: "1:245388139985:web:660f57ca3011abefd114f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
