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
  apiKey: "AIzaSyDbijnXWSMiihctivP-LmIQ035GXcvYDqI",
  authDomain: "disney-f7d76.firebaseapp.com",
  projectId: "disney-f7d76",
  storageBucket: "disney-f7d76.appspot.com",
  messagingSenderId: "516996058756",
  appId: "1:516996058756:web:4498e3d32e2a79b8b03cd1",
  measurementId: "G-B19SV2ZH8Y"
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
