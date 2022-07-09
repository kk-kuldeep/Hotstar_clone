import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
 import 'firebase/storage';
// import { getStorage } from "firebase/storage";
const firebaseApp = firebase.initializeApp( {
  // apiKey: "AIzaSyBVbTMkEK2EADorDRcZrTOnuBiY-gehSJk",
  // authDomain: "disney-clone-db207.firebaseapp.com",
  // projectId: "disney-clone-db207",
  // storageBucket: "disney-clone-db207.appspot.com",
  // messagingSenderId: "884594623008",
  // appId: "1:884594623008:web:795be2eecdd8fd09e0b245",
  // measurementId: "G-7YTRNWCS5Y"
  apiKey: "AIzaSyBVbTMkEK2EADorDRcZrTOnuBiY-gehSJk",
  authDomain: "disney-clone-db207.firebaseapp.com",
  databaseURL: "https://disney-clone-db207-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "disney-clone-db207",
  storageBucket: "disney-clone-db207.appspot.com",
  messagingSenderId: "884594623008",
  appId: "1:884594623008:web:795be2eecdd8fd09e0b245",
  measurementId: "G-7YTRNWCS5Y"
});

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
//const storage = firebase.storage();
export { auth, provider};
export default db;
// const db = firebaseApp.firestore();
// export default db;
