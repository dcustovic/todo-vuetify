import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD-I4VymKT4cfkp2cpurEKV33qSBfMxXl8",
    authDomain: "todo-vuetify-d8db4.firebaseapp.com",
    databaseURL: "https://todo-vuetify-d8db4.firebaseio.com",
    projectId: "todo-vuetify-d8db4",
    storageBucket: "todo-vuetify-d8db4.appspot.com",
    messagingSenderId: "479144899126",
    appId: "1:479144899126:web:215f44e0d239058c1c1e97"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
 // db.settings({ timestampsInSnapshots: true });  if we dont do this we get a warning msg (we must do this because of the recent update)

  export default db;