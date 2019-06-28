/**
 * Scorecard page showing current scores
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import scoresJson from './scores.json';

type Props = {};
export default class Scorecard extends Component<Props> {
  state = {
    scores: scoresJson,
    numberOfPlayers: 2,
    numberOfHoles: 9
  }

  renderTitleRow() {
    let playerNames = [];
    for (let i=1; i<this.state.numberOfPlayers+1; i++) {
      playerNames.push(<Text key={"player"+i+"name"} style={styles.column}>{"Player "+i}</Text>)
    }

    return (
      <View style={styles.row} key="titleRow">
        <Text style={styles.column}>Hole</Text>
        <Text style={styles.column}>Par</Text>
        <Text style={styles.column}>Yards</Text>
        {playerNames}
      </View>
    )
  }

  calculateTotalScore(playerName) {
    let playerTotal = 0;
    this.state.scores.map((score) => {
      if (score[playerName]) {
        playerTotal += score[playerName];
      }
    })
    return playerTotal
  }

  renderTotalRow() {
    let playerTotals = [];
    for (let i=1; i<this.state.numberOfPlayers+1; i++) {
      let totalScore = this.calculateTotalScore(["player"+i])
      playerTotals.push(<Text key={"player"+i+"total"} style={styles.column}>{totalScore}</Text>)
    }
    let parTotal = this.calculateTotalScore("par");
    let yardsTotal = this.calculateTotalScore("yards");

    return (
      <View style={styles.row} key="totalsRow">
        <Text style={styles.column}>TOTAL</Text>
        <Text style={styles.column}>{parTotal}</Text>
        <Text style={styles.column}>{yardsTotal}</Text>
        {playerTotals}
      </View>
    )
  }

  renderScoreRows() {
    let scoreRows = [];
    for (let i=0; i<this.state.numberOfHoles; i++) {
      let score = this.state.scores[i];
      scoreRows.push(this.renderRow(score));
    }

    return (scoreRows)
  }

  renderRow(row) {
    // Using array might cause 'key' prop errors
    let playerScores = [];
    for (let i=1; i<this.state.numberOfPlayers+1; i++) {
      playerScores.push(
        <TextInput
          key={"player"+i+"score"+row.holeNumber}
          style={styles.column}
          keyboardType='numeric'
          maxLength={2}
          onChangeText={(text) => {
            this.setState(prevState => ({
              scores: prevState.scores.map(
                hole => (hole.holeNumber === row.holeNumber ? Object.assign(hole, {["player"+i]: parseInt(text)}) : hole)
              )
            }))
          }}
        >
          {row["player"+i] ? row["player"+i] : ''}
        </TextInput>
      )
    }

    return (
      <View style={styles.row} key={"Hole" + row.holeNumber}>
        <Text style={styles.column}>{row.holeNumber}</Text>
        <Text style={styles.column}>{row.par}</Text>
        <Text style={styles.column}>{row.yards}</Text>
        {playerScores}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scorecard</Text>
        <Text style={styles.comment}>Course: My Favourite Green</Text>
        <Text style={styles.comment}>Date: 1st January 2000</Text>
        {this.renderTitleRow()}
        {this.renderScoreRows()}
        {this.renderTotalRow()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  comment: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  scorecard: {
    fontSize: 14,
    textAlign: 'left',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
//    flex: 1,
//    width: '100%',
    padding: 5,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
//    flexBasis: '100%',
//    flex: 1,
    padding: 5,
  },
});