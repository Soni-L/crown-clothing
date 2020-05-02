import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBlZuQGqPWkB0Sr1bTZQCnUL_0frmWFcis",
  authDomain: "crwn-db-c6b00.firebaseapp.com",
  databaseURL: "https://crwn-db-c6b00.firebaseio.com",
  projectId: "crwn-db-c6b00",
  storageBucket: "crwn-db-c6b00.appspot.com",
  messagingSenderId: "573689444992",
  appId: "1:573689444992:web:2450631af096131a4d0465",
  measurementId: "G-37HZ3GEY23"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;