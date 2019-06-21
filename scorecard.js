/**
 * Scorecard page showing current scores
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import scores from './scores.json';

const maxHoles = 4;

type Props = {};
export default class Scorecard extends Component<Props> {
  renderHolesRow() {
    let holesNo = [];
    for (let i=1; i<maxHoles; i++) {
      holesNo.push(<Text style={styles.cell}>{i}</Text>)
    }

    return (
      <View style={styles.row} key="holeNo">
        <Text style={styles.cell}>Hole</Text>
        {holesNo}
      </View>
    )
  }

  renderRow(row) {
    // Using array might cause 'key' prop errors
    let cells = [];
    for (let i=1; i<maxHoles; i++) {
      cells.push(<Text style={styles.cell}>{row["hole"+i]}</Text>)
    }

    return (
      <View style={styles.row} key={row.id}>
        <Text style={styles.cell}>{row.id}</Text>
        {cells}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scorecard</Text>
        <Text style={styles.comment}>Course: My Favourite Green</Text>
        <Text style={styles.comment}>Date: 1st January 2000</Text>
        {this.renderHolesRow()}
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