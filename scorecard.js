/**
 * Scorecard page showing current scores
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Table, Row, Cell} from 'react-native';

type Props = {};
export default class Scorecard extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Scorecard</Text>
        <Text style={styles.comment}>To get started, edit App.js</Text>
        <Table style={styles.scorecard}>
          <Row>
            <Cell>
              <Text style={styles.comment}>Joe</Text>
            </Cell>
            <Cell>
              <Text style={styles.comment}>3</Text>
            </Cell>
            <Cell>
              <Text style={styles.comment}>4</Text>
            </Cell>
            <Cell>
              <Text style={styles.comment}>4</Text>
            </Cell>
            <Cell>
              <Text style={styles.comment}>3</Text>
            </Cell>
            <Cell>
              <Text style={styles.comment}>7</Text>
            </Cell>
          </Row>
        </Table>
      </View>
    );
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
});