// import React, {Component} from 'react';
// import {StyleSheet, Text, View, TextInput} from 'react-native';
// import * as firebase from 'firebase';
// import { createAppContainer,createSwitchNavigator,AppNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';

// import Login from './app/screens/Login';
// import Main from './app/screens/main';
// import Register from './app/screens/Register';

// export class App extends React.Component {

//     componentDidMount = () => {
//         var firebaseConfig = {
//             apiKey: "AIzaSyABMGZ365YGID71HiweejF7YbCXWo0PrQg",
//             authDomain: "todoapp-d0285.firebaseapp.com",
//             projectId: "todoapp-d0285",
//             storageBucket: "todoapp-d0285.appspot.com",
//             messagingSenderId: "837452800896",
//             appId: "1:837452800896:web:862fc414d58487295e1765",
//             measurementId: "G-JZ42DBFYWW"
//         };
//         // Initialize Firebase
//         firebase.initializeApp(firebaseConfig);
//         firebase
//             .auth()
//             .onAuthStateChanged(auth => {
//                 if (auth) {
//                     //giriş yapıldı
//                 } else {
//                     //giriş yapılmadı
//                 }
//             })
//     }

//     render() {
//         return (<Login/>);
//     }
// }

// const routeConfig = { Login: Login, Main: Main };
// const navigatorConfig = { initialRouteName: 'Login' };

// export default AppNavigator = createSwitchNavigator(routeConfig, navigatorConfig);

// /*
// const TabNavigator = createBottomTabNavigator({
//     Login: Login,
//     Register: Register,
// },
// {
//     initialRouteName: 'Login',
// });

// export default createAppContainer(TabNavigator);*/

// ./App.js

//  ./App.js

// ./App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";

 const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App;