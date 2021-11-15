// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUT_DOM,
  projectId: process.env.REACT_APP_FIREBASE_PROJ_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSJ_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

//Esta funcion retorna app - creamos una instancia para nuestra app
export const getFirebase = () => app;
//Esta fn es para nuestra BD -> creamos una instancia para la BD
export const getFirestore = () => firebase.firestore(app);

export const getDateTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const time = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
  return time;
}