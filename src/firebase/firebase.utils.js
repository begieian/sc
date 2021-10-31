import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCHj21IWjYcrlwzDUay8Vtcg8gf8jipa7Y",
  authDomain: "sc-db-sc.firebaseapp.com",
  projectId: "sc-db-sc",
  storageBucket: "sc-db-sc.appspot.com",
  messagingSenderId: "721500622512",
  appId: "1:721500622512:web:941f9680e35a9af580f575",
  measurementId: "G-41Q4BD11R7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
  .then(function(result){
    console.log(result);
  }).catch(function(error){
    console.log(error.message);
  });

export default firebase;