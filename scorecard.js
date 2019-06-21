/**
 * Scorecard page showing current scores
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import scores from './scores.json';

const numberOfPlayers = 2;

type Props = {};
export default class Scorecard extends Component<Props> {
  renderTitleRow() {
    let playerNames = [];
    for (let i=1; i<numberOfPlayers+1; i++) {
      playerNames.push(<Text style={styles.column}>{"Player "+i}</Text>)
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

  renderRow(row) {
    // Using array might cause 'key' prop errors
    let playerScores = [];
    for (let i=1; i<numberOfPlayers+1; i++) {
      playerScores.push(<Text style={styles.column}>{row.data["player"+i]}</Text>)
    }

    return (
      <View style={styles.row} key={row.holeNumber}>
        <Text style={styles.column}>{row.holeNumber}</Text>
        <Text style={styles.column}>{row.data.par}</Text>
        <Text style={styles.column}>{row.data.yards}</Text>
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
        {
          scores.map((score) => {
            return this.renderRow(score);
          })
        }
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
//    width: '100%',
    padding: 5,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
//    flexBasis: '100%',
//    flex: 1,
    padding: 10,
  },
});