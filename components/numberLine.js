import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../constants/colors';

const NumberLine = props => {
    return(
        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>
                Your number: {props.selectedNumber}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    numberContainer: {
        padding: 5,
        width: '100%',
        backgroundColor: 'red',
    },
    numberText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

export default NumberLine;