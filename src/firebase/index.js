// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = firebase.initializeApp({
  apiKey: "AIzaSyAO6wNeB_jPxzFlgO_FlyGk9jtL4ZkrAOc",
  authDomain: "ch-donas.firebaseapp.com",
  projectId: "ch-donas",
  storageBucket: "ch-donas.appspot.com",
  messagingSenderId: "722562399978",
  appId: "1:722562399978:web:be2636e38230b2eecda193",
});

//Esta funcion retorna app - creamos una instancia para nuestra app
export const getFirebase = () => app;
//Esta fn es para nuestra BD -> creamos una instancia para la BD
export const getFirestore = () => firebase.firestore(app);

