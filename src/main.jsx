import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD9qoiHQKFtYdqHzpTJJUUbUK2ZFgXc5q8",
  authDomain: "tienda-music-store.firebaseapp.com",
  projectId: "tienda-music-store",
  storageBucket: "tienda-music-store.appspot.com",
  messagingSenderId: "622418525303",
  appId: "1:622418525303:web:29bad9c6c182acb00b9a72"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
