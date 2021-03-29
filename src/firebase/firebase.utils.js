import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBoCA7WU-FiClmQW0en0Lue5Q30-slpKuc",
  authDomain: "crwn-db-a1000.firebaseapp.com",
  projectId: "crwn-db-a1000",
  storageBucket: "crwn-db-a1000.appspot.com",
  messagingSenderId: "146078004470",
  appId: "1:146078004470:web:9913471212d14b81e328d7",
  measurementId: "G-8Y8WV927JE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
