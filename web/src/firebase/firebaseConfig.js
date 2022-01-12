import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCI-EvF0dEVKW8q8wBgzTPJLAOVyG941rw',
  authDomain: 'reto-sofka-kevealci.firebaseapp.com',
  projectId: 'reto-sofka-kevealci',
  storageBucket: 'reto-sofka-kevealci.appspot.com',
  messagingSenderId: '1068394147249',
  appId: '1:1068394147249:web:5e83c23be33b078326e190'
};

firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, firebase };
