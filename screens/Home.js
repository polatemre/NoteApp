import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    TextInput
} from 'react-native';
import firebase from '../Firebase';
import FlashMessage from "react-native-flash-message";
import {showMessage} from "react-native-flash-message";
import Main from './main';

export default class Home extends Component {

    constructor() {
        super();
    }

    state = {
        email: '',
        password: '',
        login: false
    }

    Register = () => {
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(data => {
                    () => showMessage({message: "Başarılı", description: "Giriş Yapılıyor.", type: "success"}),

                    firebase
                        .firestore()
                        .collection("Users")
                        .doc(data.user.uid)
                        .then((ref) => {});
                    this
                        .props
                        .navigation
                        .navigate('Main', data.user.uid)

                })
                .catch(error => {
                    showMessage({message: "Hata", description: "Girdiğiniz Bİlgiler Hatalı.", type: "danger"});
                });

        } catch (error) {
            console.log(error.toString(error));
        }
    };

    Login = () => {
        try {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(data => {
                    showMessage({message: "Başarılı", description: "Giriş Yapılıyor.", type: "success"}),
                    this
                        .props
                        .navigation
                        .navigate('Main', data.user.uid)
                })
                .catch(error => {
                    showMessage({message: "Hata", description: "Girdiğiniz Bİlgiler Hatalı.", type: "danger"});
                });

        } catch (error) {
            console.log(error.toString(error));
        }

    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="black"/>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        underlineColorAndroid='transparent'
                        placeholder="E-posta adresi"
                        placeholderTextColor="gray"
                        keyboardType='email-address'
                        onChangeText={email => this.setState({email: email})}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput secureTextEntry style={styles.inputText} placeholder="Şifre" placeholderTextColor="gray" //#003f5c
                        onChangeText={password => this.setState({password: password})}/>
                </View>

                <TouchableOpacity onPress={() => this.Login()} style={styles.loginBtn}>
                    <Text style={styles.loginText}>Giriş Yap</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.Register()} style={styles.SignUpBtn}>
                    <Text style={styles.loginText}>
                        Kayıt Ol
                    </Text>
                </TouchableOpacity>

                <FlashMessage position="bottom"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        fontStyle: 'italic',
        fontWeight: "bold",
        fontSize: 60,
        color: "#fb5b5a",
        marginBottom: 70,
        textShadowRadius: 10
    },
    inputView: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        marginTop: 10,
        padding: 15,
        fontSize: 12,
        borderRadius: 4,
        backgroundColor: "#f5f5f5"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    },
    SignUpBtn: {
        width: "80%",
        backgroundColor: "#669999",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3
    }
});