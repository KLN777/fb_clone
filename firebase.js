import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAWmX9FA4NjzJSPQQ9otGGuPMlui7iisH8",
    authDomain: "facebook-d31c2.firebaseapp.com",
    projectId: "facebook-d31c2",
    storageBucket: "facebook-d31c2.appspot.com",
    messagingSenderId: "656709903828",
    appId: "1:656709903828:web:987135e25bf6e7762fe241"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage}