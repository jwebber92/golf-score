/**
 * Scorecard page showing current scores
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Scorecard extends Component<Props> {
  renderColumn(column) {
    return (
      <View style={styles.cell}>
        <Text style={styles.comment}>{column}</Text>
      </View>
    )
  }

  renderRow(row) {
    return (
      <View style={styles.row}>
        {
          row.map((column) => {
            return this.renderColumn(column);
          })
        }
      </View>
    );
  }

  render() {
    const scores = [
      ['Hole', 'Yards', 'Par', 'Player 1', 'Player 2', 'Player 3', 'Player 4'],
      [1, 140, 3, 4, 5, 4, 3],
      [2, 250, 4, 4, 6, 5, 7],
      [3, 160, 3, 3, 3, 2, 6],
      [4, 300, 5, 5, 6, 6, 5],
      [5, 270, 4, 7, 3, 6, 5]
     ];
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scorecard</Text>
        <Text style={styles.comment}>Course: My Favourite Green</Text>
        <Text style={styles.comment}>Date: 1st January 2000</Text>
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
    flexDirection: 'row',
    padding: 5,
  },
  cell: {
    flexDirection: 'column',
    padding: 10,
  },
});