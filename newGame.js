/**
 * New game page providing user input for setup of new scorecard
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

type Props = {};
export default class NewGame extends Component<Props> {
  setupHoles() {
    return (
      <View>
        <Text>How many holes are you playing?</Text>
        <Button
          onPress={() => {
            Alert.alert("9");
          }}
          title="9 holes"
        />
        <Button
          onPress={() => {
            Alert.alert("18");
          }}
          title="18 holes"
        />
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
        <Text>Enter up to 4 players</Text>
        {playerNameInputs}
      </View>
    )
  }

  render() {
    return(
      <View>
        {this.setupHoles()}
        {this.setupPlayers()}
      </View>
    )
  }
}