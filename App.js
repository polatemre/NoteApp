import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';

import Main from './app/components/main';

export default class App extends React.Component {

    componentDidMount = () => {
      var firebaseConfig = {
        apiKey: "AIzaSyABMGZ365YGID71HiweejF7YbCXWo0PrQg",
        authDomain: "todoapp-d0285.firebaseapp.com",
        projectId: "todoapp-d0285",
        storageBucket: "todoapp-d0285.appspot.com",
        messagingSenderId: "837452800896",
        appId: "1:837452800896:web:862fc414d58487295e1765",
        measurementId: "G-JZ42DBFYWW"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }

    render() {
        return (<Main/>);
    }
}