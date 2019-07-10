/**
 * New game page providing user input for setup of new scorecard
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Alert, Button, TouchableHighlight} from 'react-native';

type Props = {};
export default class NewGame extends Component<Props> {
  setupHoles() {
    return (
      <View>
        <Text style={styles.header}>How many holes are you playing?</Text>
        <View style={styles.holesView}>
          <TouchableHighlight
            onPress={() => {
              Alert.alert("9");
            }}
          >
            <Text style={styles.holesButtonInactive}>9 holes</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              Alert.alert("18");
            }}
          >
            <Text style={styles.holesButtonInactive}>18 holes</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  setupPlayers() {
    let playerNameInputs = [];
    for (let i=1; i<5; i++) {
      playerNameInputs.push(
        <TextInput
          key={"player"+i}
//          style={styles.column}
//          onChangeText={(text) => {
//            this.setState(prevState => ({
//              scores: prevState.scores.map(
//                hole => (hole.holeNumber === row.holeNumber ? Object.assign(hole, {["player"+i]: parseInt(text)}) : hole)
//              )
//            }))
//          }}
        >
          {"Player" + i}
        </TextInput>
      )
    }

    return (
      <View>
        <Text style={styles.header}>Enter up to 4 players</Text>
        {playerNameInputs}
      </View>
    )
  }

  render() {
    return(
      <View>
        <Text style={styles.pageHeader}>New Round</Text>
        {this.setupHoles()}
        {this.setupPlayers()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageHeader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black'
  },
  header: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    color: 'black'
  },
  holesView: {
//    display: 'flex',
    flexDirection: 'row',
//    flex: 1,
//    width: '100%',
  },
  holesButtonInactive: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    marginLeft: 20,
    width: 150,
//    flex: 1,
  },
  playersInput: {
  }
});