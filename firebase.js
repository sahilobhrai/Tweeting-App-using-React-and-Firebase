import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBl7t7qW_27Nura1IN67QgTgg0thtRsupA",
    authDomain: "sena-tweets.firebaseapp.com",
    projectId: "sena-tweets",
    storageBucket: "sena-tweets.appspot.com",
    messagingSenderId: "297960989073",
    appId: "1:297960989073:web:f7c7ff398439063c95ba30",
    measurementId: "G-B42LQF758B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db