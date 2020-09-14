import firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyD8BtzXDTmOScnWNN4wCfVBRGGIBXkToYw',
  authDomain: 'e-clone-21f39.firebaseapp.com',
  databaseURL: 'https://e-clone-21f39.firebaseio.com',
  projectId: 'e-clone-21f39',
  storageBucket: 'e-clone-21f39.appspot.com',
  messagingSenderId: '1011055575835',
  appId: '1:1011055575835:web:7fdccd2df54860448b89be'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };