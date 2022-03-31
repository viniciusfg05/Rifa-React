// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDTLAs_zhnABIq6LPiErbbNza_z2jgnBM",
  authDomain: "vlrifa.firebaseapp.com",
  projectId: "vlrifa",
  storageBucket: "vlrifa.appspot.com",
  messagingSenderId: "204841606194",
  appId: "1:204841606194:web:4a42b0e8683bc1d08d302b",
  measurementId: "G-Q326S8L1E8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();

export { firebase, auth, database };

/*
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4JifyFUJBhgyL_D_taXB7SGswrwnIPuo",
  authDomain: "letmeask-b337f.firebaseapp.com",
  databaseURL: "https://letmeask-b337f-default-rtdb.firebaseio.com",
  projectId: "letmeask-b337f",
  storageBucket: "letmeask-b337f.appspot.com",
  messagingSenderId: "617521980094",
  appId: "1:617521980094:web:4656807d571de978e574ef"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.firestore();

export { firebase, auth, database };
*/