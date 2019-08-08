/**
 * Styles for scorecard page
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scrollview: {
    margin: 5
  },
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
  },
  totalRow: {
    borderTopWidth: 1.5,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    color: '#333333',
    borderWidth: 0.5,
  },
  yardsCol: {
    backgroundColor: 'yellow',
  },
});