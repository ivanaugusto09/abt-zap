import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'


var firebaseConfig = {
  apiKey: "AIzaSyDkfdLBCzCn_ra4IJbR30El8EScmllRlaM",
  authDomain: "abtchat.firebaseapp.com",
  databaseURL: "https://abtchat.firebaseio.com",
  projectId: "abtchat",
  storageBucket: "abtchat.appspot.com",
  messagingSenderId: "987235881041",
  appId: "1:987235881041:web:ca97d890bd0cd65fade870"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebase.database();

export {firebaseAuth, firebaseDb}
