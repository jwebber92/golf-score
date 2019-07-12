/**
 * New game page providing user input for setup of new scorecard
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Alert, Button, TouchableHighlight} from 'react-native';

type Props = {};
export default class NewGame extends Component<Props> {
  state={
    holes: 0,
    players: []
  }

  setupHoles() {
    return (
      <View>
        <Text style={styles.header}>How many holes are you playing?</Text>
        <View style={styles.holesView}>
          <TouchableHighlight
            style={styles.holesButtonBox}
            onPress={() => {
              this.setState({holes: 9});
            }}
          >
            <Text
              style={
              this.state.holes === 9
              ? styles.holesButtonTextActive
              : styles.holesButtonText
              }>
              9 holes
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.holesButtonBox}
            onPress={() => {
              this.setState({holes: 18});
            }}
          >
            <Text
              style={
              this.state.holes === 18
              ? styles.holesButtonTextActive
              : styles.holesButtonText
              }>
              18 holes
            </Text>
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
          style={styles.playersInput}
          placeholder={"Player" + i}
//          onChangeText={(text) => {
//            this.setState(prevState => ({
//              scores: prevState.scores.map(
//                hole => (hole.holeNumber === row.holeNumber ? Object.assign(hole, {["player"+i]: parseInt(text)}) : hole)
//              )
//            }))
//          }}
        />
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
    flexDirection: 'row',
  },
  holesButtonBox: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  holesButtonText: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    paddingTop: 60,
    paddingBottom: 60,
    fontSize: 16,
  },
  holesButtonTextActive: {
    color: '#1e661e',
    backgroundColor: '#a2ffa1',
    borderColor: '#1e661e',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    paddingTop: 60,
    paddingBottom: 60,
    fontSize: 16,
  },
  playersInput: {
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 16,
    borderLeftColor: 'grey',
    borderStyle: 'dotted',
    borderLeftWidth: 5,
    backgroundColor: '#ededed',
  }
});