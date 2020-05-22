import Firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyDBPH2z33ieZyn9o-TZjYeHLYPcXi4lyqc",
    authDomain: "stayrific-app.firebaseapp.com",
    databaseURL: "https://stayrific-app.firebaseio.com",
    projectId: "stayrific-app",
    storageBucket: "stayrific-app.appspot.com",
    messagingSenderId: "374724684436",
    appId: "1:374724684436:web:d035c3ed44067279cea281"
  };

  const app=Firebase.initializeApp(firebaseConfig);

  export const db = app.database();