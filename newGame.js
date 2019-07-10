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

  render() {
    return(
      <View>
        {this.setupHoles()}
      </View>
    )
  }
}