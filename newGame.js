/**
 * New game page providing user input for setup of new scorecard
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Alert, TouchableHighlight} from 'react-native';

type Props = {};
export default class NewGame extends Component<Props> {
  state={
    holes: 0,
    players: [],
//    player1: '',
//    player2: '',
//    player3: '',
//    player4: '',
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
              style={[styles.holesButtonText,
              {backgroundColor: (this.state.holes === 9 ? '#75f077' : '#ededed')}
              ]}
            >
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
              style={[styles.holesButtonText,
              {backgroundColor: (this.state.holes === 18 ? '#75f077' : '#ededed')}
              ]}
            >
              18 holes
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  addPlayer(name) {
    this.setState(prevState => ({
      // TODO allow editing of player name
      players: prevState.players.concat(name)
    }));
  }

  setupPlayers() {
    let playerNameInputs = [];
    for (let i=1; i<5; i++) {
      playerNameInputs.push(
        <TextInput
          key={"player"+i}
          style={[styles.playersInput,
            {backgroundColor: (this.value ? '#75f077' : '#ededed')}
//            {backgroundColor: '#ededed'}
          ]}
          placeholder={"Player" + i}
          onSubmitEditing={(event) => {
            this.addPlayer(event.nativeEvent.text);
          }}
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
        <TouchableHighlight
          style={styles.submitButtonBox}
          onPress={() => {
            Alert.alert("Holes: " + this.state.holes + "\nPlayers: " + this.state.players);
            this.props.navigation.navigate('Scorecard', {
              numberOfPlayers: this.state.players.length,
              playerNames: this.state.players,
              numberOfHoles: this.state.holes
            });
          }}
        >
          <Text style={styles.submitButtonText}>Start new round!</Text>
        </TouchableHighlight>
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
    paddingBottom: 20,
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
    marginBottom: 20,
  },
  holesButtonText: {
    color: 'black',
    borderColor: 'black',
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
  },
  submitButtonBox: {
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
  },
  submitButtonText: {
    color: 'black',
    fontSize: 18,
    backgroundColor: '#75f077',
    textAlign: 'center',
    padding: 10,
  }
});