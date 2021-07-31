// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOA6-pboC_dss_so6mMSglG6ZzfFwTITI",
    authDomain: "twitter-clone-f1a87.firebaseapp.com",
    projectId: "twitter-clone-f1a87",
    storageBucket: "twitter-clone-f1a87.appspot.com",
    messagingSenderId: "219451150334",
    appId: "1:219451150334:web:781ecfe8ba185df7e9faaf",
    measurementId: "G-T0JVL50VS5"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;