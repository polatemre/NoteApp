import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import * as FirebaseCore from 'expo-firebase-core';
import Note from '../components/note';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: ''
        }
    }

    render() {
        let notes = this
            .state
            .noteArray
            .map((val, key) => {
                return <Note
                    key={key}
                    keyval={key}
                    val={val}
                    deleteMethod={() => this.deleteNote(key)}/>
            })

        return (
            <View style={styles.container}>
                <View
                    style={{
                    padding: 15,
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: 'lightgray'
                }}>
                    <Text style={styles.headerText}>Notlarım</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({noteText})}
                        value={this.state.noteText}
                        placeholder='Yapılak işi giriniz...'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'></TextInput>
                </View>
                <TouchableOpacity
                    onPress={this
                    .addTask
                    .bind(this)}
                    style={styles.addButton}>
                    <Text style={styles.addButtonText}>Ekle</Text>
                </TouchableOpacity>

            </View>
        );
    }

    addTask() {
        if (this.state.noteText) {
            var date = new Date();

            this
                .state
                .noteArray
                .push({
                    'date': "Tarih: " + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate(),
                    'note': this.state.noteText
                });

            this.setState({noteArray: this.state.noteArray});
            this.setState({noteText: this.state.noteText});
        }
    };

    deleteNote(key) {
        this
            .state
            .noteArray
            .splice(key, 1);
        this.setState({noteArray: this.state.noteArray});
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: 'gray',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#3933FF',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 12
    }
});
