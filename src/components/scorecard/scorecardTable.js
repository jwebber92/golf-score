/**
 * Scorecard table showing current scores
 */

import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './styles';

export default class ScorecardTable extends Component {
	state = {
    scores: this.props.scores,
    numberOfPlayers: this.props.numberOfPlayers,
    numberOfHoles: this.props.numberOfHoles,
    playerNames: this.props.playerNames
	}
	
	renderTitleRow() {
    let playerNameCells = [];
    for (let i=1; i<this.state.numberOfPlayers+1; i++) {
      playerNameCells.push(<Text key={"player"+i+"name"} style={styles.column}>{this.state.playerNames[i-1] || ("Player "+i)}</Text>)
    }

    return (
      <View style={styles.row} key="titleRow">
        <Text style={styles.column}>Hole</Text>
        <Text style={[styles.column, styles.yardsCol]}>Yards</Text>
        <Text style={styles.column}>Par</Text>
        <Text style={styles.column}>Stroke Index</Text>
        {playerNameCells}
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
        <TextInput
          key={"yards"+row.holeNumber}
          style={[styles.column, styles.yardsCol]}
          keyboardType='numeric'
          maxLength={3}
          onChangeText={(text) => {
            this.setState(prevState => ({
              scores: prevState.scores.map(
                hole => (hole.holeNumber === row.holeNumber ? Object.assign(hole, {["yards"]: parseInt(text)}) : hole)
              )
            }))
          }}
        >
          {row["yards"] ? row["yards"] : ''}
        </TextInput>
        <TextInput
          key={"par"+row.holeNumber}
          style={styles.column}
          keyboardType='numeric'
          maxLength={1}
          onChangeText={(text) => {
            this.setState(prevState => ({
              scores: prevState.scores.map(
                hole => (hole.holeNumber === row.holeNumber ? Object.assign(hole, {["par"]: parseInt(text)}) : hole)
              )
            }))
          }}
        >
          {row["par"] ? row["par"] : ''}
        </TextInput>
        <TextInput
          key={"SI"+row.holeNumber}
          style={styles.column}
          keyboardType='numeric'
          maxLength={2}
          onChangeText={(text) => {
            this.setState(prevState => ({
              scores: prevState.scores.map(
                hole => (hole.holeNumber === row.holeNumber ? Object.assign(hole, {["SI"]: parseInt(text)}) : hole)
              )
            }))
          }}
        >
          {row["SI"] ? row["SI"] : ''}
        </TextInput>
        {playerScores}
      </View>
    );
  }
}