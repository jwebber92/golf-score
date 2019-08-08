/**
 * Scorecard page main file
 */

import React, {Component} from 'react';
import {ScrollView, Text, View, TextInput} from 'react-native';

import styles from './scorecard/styles';
// import ScorecardTable from './scorecard/scorecardTable';
import scoresJson from '../assets/scores.json';

export default class Scorecard extends Component {
  state = {
    scores: this.props.navigation.getParam('emptyScores', scoresJson),
    numberOfPlayers: this.props.navigation.getParam('numberOfPlayers', 2),
    numberOfHoles: this.props.navigation.getParam('numberOfHoles', 9),
    playerNames: this.props.navigation.getParam('playerNames', [])
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
      <View style={[styles.row, styles.totalRow]} key="totalsRow">
        <Text style={styles.column}>TOTAL</Text>
        <Text style={[styles.column, styles.yardsCol]}>{yardsTotal}</Text>
        <Text style={styles.column}>{parTotal}</Text>
        <Text style={styles.column}>OUT</Text>
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

  render() {
    return (
      <ScrollView style={styles.scrollview}>
        <Text style={styles.title}>Scorecard</Text>
        <Text style={styles.comment}>Course: My Favourite Green</Text>
        <Text style={styles.comment}>Date: 1st January 2000</Text>
        {/* <ScorecardTable 
          scores={this.state.scores}
          numberOfPlayers={this.state.numberOfPlayers}
          numberOfHoles={this.state.numberOfHoles}
          playerNames={this.state.playerNames}
        /> */}
        {this.renderTitleRow()}
        {this.renderScoreRows()}
        {this.renderTotalRow()}
      </ScrollView>
    )
  }
}
