import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import * as firebase from 'firebase';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

export default class Login extends React.Component { //App
  constructor(){
    super();
  }
  state={
    email:"",
    password:"",
    login: false
  }
  
  Login = (email, password) => {

    try {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(data=>{
          showMessage({
          message: "Başarılı",
          description: "Giriş Yapılıyor.",
          type: "success",
        }),
        
        this.props.navigation.navigate('Main',data.user.uid)
      }
         ).catch(error=>{
          showMessage({
            message: "Uyarı",
            description: "Girdiğiniz Bİlgiler Hatalı.",
            type: "danger",
          });
         });

} catch (error) {
      console.log(error.toString(error));
      
    }

  };

  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black"/>
        <Text style={styles.logo}>To Do App</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="E-posta adresinizi giriniz..." 
            placeholderTextColor="gray"
            keyboardType = 'email-address'
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Şifrenizi giriniz..."
            placeholderTextColor="gray" //#003f5c
            onChangeText={text => this.setState({password:text})}/>
        </View>

        <TouchableOpacity onPress={() => this.Login(this.state.email, this.state.password)} style={styles.loginBtn}>
          <Text style={styles.loginText}>Giriş Yap</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.SignUpBtn}  onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.loginText}>
            Kayıt Ol
          </Text>
        </TouchableOpacity>

        <FlashMessage position="bottom" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#003f5c',
    backgroundColor: '#1A344E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontStyle: 'italic',
    fontWeight:"bold",
    fontSize:60,
    color:"#fb5b5a",
    marginBottom:70,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 10},
    textShadowRadius: 10
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:70,
    marginBottom:10,
    
  },
  loginText:{
    color:"white",
  },
  SignUpBtn:{
    width:"80%",
    backgroundColor:"#669999",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:3
  },

  RankingBtn:{
    width:"50%",
    backgroundColor:"#0EADF3",
    borderRadius:22,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:65

  }
});