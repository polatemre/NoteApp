import {firebase} from '@firebase/app';
require('firebase/auth')

import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyABMGZ365YGID71HiweejF7YbCXWo0PrQg",
    authDomain: "todoapp-d0285.firebaseapp.com",
    projectId: "todoapp-d0285",
    storageBucket: "todoapp-d0285.appspot.com",
    messagingSenderId: "837452800896",
    appId: "1:837452800896:web:862fc414d58487295e1765",
    measurementId: "G-JZ42DBFYWW"
};
firebase.initializeApp(config);

export default firebase;