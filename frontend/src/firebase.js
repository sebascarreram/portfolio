//Import firebase from node_modules
import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

//initialize a Firebase instance
firebase.initializeApp(firebaseConfig);

//initialize Cloud Functions through Firebase
firebase.functions();

//this is optional, in case you want you wanna use analytics
firebase.analytics();

//export the `firebase` namespace to import it in src/App.js
export default firebase;
