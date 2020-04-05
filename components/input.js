import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Colors from '../constants/colors';

const Input = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} {...props}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    inputContainer: {
        width: '100%',
        marginVertical: 60,
        alignItems: 'center',
        marginTop: 100,
    },

    input: {
        borderBottomColor: Colors.main,
        borderBottomWidth: 2,
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: "center",
        width: '80%',
        color: Colors.main,
    },
    demissButton: {
        display: "none",
    }
})

export default Input;