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
  measurementId: "G-37HZ3GEY23",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
