import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAivEVgXsxaKCxt8HOaP0Ypxvw4fsFA-f0",
  authDomain: "very-hot-burgers-b319b.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-b319b-default-rtdb.europe-west1.firebasedatabase.app",
})

export const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
