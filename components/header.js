import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.headerContainer}> 
            <Text style={styles.headerText}>
                {props.title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: Colors.main,
        width: '100%',
        paddingTop: 50,
        paddingBottom: 20,
    },

    headerText: {
        color: Colors.mainText,
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center',
    },
})

export default Header;