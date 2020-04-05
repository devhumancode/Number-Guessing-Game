import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Buttons = props => {
    return(
        <View style={styles.buttonContainer}>
            <Button title={props.firstTitle} color="red" onPress={props.firstAction}/>
            <Button title={props.secondTitle} color="green" onPress={props.secondAction} />
        </View>
    )
}

const styles = StyleSheet.create ({
    buttonContainer: {
        flexDirection: 'row',
        width: '70%',
        marginLeft: '15%',
        justifyContent: 'space-between',
    },
})

export default Buttons;