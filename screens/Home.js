import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import * as firebase from 'firebase';

// import { createAppContainer,createSwitchNavigator,AppNavigator } from
// 'react-navigation'; import { createBottomTabNavigator } from
// 'react-navigation-tabs'; import { createStackNavigator } from
// 'react-navigation-stack';

import Login from './app/screens/Login';
// import Main from './app/screens/main'; import Register from
// './app/screens/Register';

export default class Home extends React.Component {

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
        firebase
            .auth()
            .onAuthStateChanged(auth => {
                if (auth) {
                    //giriş yapıldı
                } else {
                    //giriş yapılmadı
                }
            })
    }

    render() {
        return (<Login/>);
    }
}

// ./screens/Home.js import React from "react"; import { View, Button, Text,
// StyleSheet } from "react-native"; const Home = ({ navigation }) => {   return
// (     <View style={styles.center}>       <Text>This is the home screen</Text>
//       <Button         title="Go to About Screen"         onPress={() =>
// navigation.navigate("About")} // We added an onPress event which would
// navigate to the About screen       />     </View>   ); }; const styles =
// StyleSheet.create({   center: {     flex: 1,     justifyContent: "center",
//  alignItems: "center",     textAlign: "center",   }, }); export default Home;