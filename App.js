import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button, Keyboard, TouchableWithoutFeedback, Modal } from 'react-native';

import Header from './components/header';
import Input from './components/input';
import Colors from './constants/colors';
import Buttons from './components/buttons';
import NumberLine from './components/numberLine';

export default class App extends Component {
  state = {
    userNumber: 1,
    visible: 'false',
    computerGuess: makeComputerGuess(0, 9999, 0),
    min: 0,
    max: 9999,
    guessedRight: false,
  }
  render () {
    const checkIfCorrect = () => {
      var guess = this.state.computerGuess;
      var correct = this.state.userNumber;
      if(guess == correct){
        alert("Computer Won!");
        this.state.guessedRight= true;
      }
    }

    const inputHandler = inputText => {
      if(isNaN(inputText)){
        inputText.replace(/[^0-9]/g, '')
        alert("USE ONLY INTEGERS")
      }
      else {
        this.setState({userNumber: inputText})
      }
    }

    const confirmNumber = () => {
      if(this.state.userNumber != ''){
        this.setState({visible: true});
        this.setState({guessedRight: false})
      }
      else {
        alert("ENTER NUMBER FIRST");
      }
    }

    const restartGame = () => {
      this.setState({visible: 'false'})
      this.state.max=9999;
      this.state.min=0;
      this.setState({computerGuess: makeComputerGuess(this.state.min, this.state.max, this.state.computerGuess)});
    }

    const guessSmaller = () => {
      if(this.state.computerGuess > this.state.userNumber){
        this.state.max = this.state.computerGuess;
        this.setState({computerGuess: makeComputerGuess(this.state.min, this.state.max, this.state.computerGuess)});
      }
      else{
        alert("DON'T CHEAT!!!");
      }
    }

    const guessBigger = () => {
      if(this.state.computerGuess < this.state.userNumber){
        this.state.min = this.state.computerGuess;
        this.setState({computerGuess: makeComputerGuess(this.state.min, this.state.max, this.state.computerGuess)});
      }
      else{
        alert("DON'T CHEAT!!!");
      }
    }
    return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.root}>
          <Header title="Main Page"/>
          <Input maxLength={4} keyboardType="number-pad" placeholder="enter number" onChangeText={inputHandler}/>
          <Buttons secondAction={confirmNumber} firstTitle="Cancel" secondTitle="Confirm"/>

          <Modal visible={this.state.visible}>
            <View style={styles.rootGame}>
              <Header title="Let's play!" />
              <NumberLine selectedNumber={this.state.userNumber}/>
              <View style={{marginTop: 60, width: '100%', alignContent: 'center',}} >
                <Text style={{color: Colors.accentText, fontSize:20, fontWeight: 'bold', textAlign: 'center',}}>
                  Computer Guess:
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 60, textAlign: 'center', color: Colors.main,}}>
                  {this.state.computerGuess}
                </Text>
                {checkIfCorrect()}
                <Buttons firstTitle="Smaller" firstAction={guessSmaller} secondTitle="Bigger" secondAction={guessBigger}/>
                {this.state.guessedRight && <Button onPress={restartGame} color="green" title="Restart Game" style={{width:'40%', marginLeft: '20%', textAlign: 'center',}}/>}
              </View>
            </View>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const makeComputerGuess = (min, max, current) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const guessMade = Math.floor((Math.random() * (max -min)) + min);
  if(guessMade == current){
    makeComputerGuess(min, max, current)
  }
  else{
    return guessMade;
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.accent,
    height: '100%',
    width: '100%',
  },
  rootGame: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
});
