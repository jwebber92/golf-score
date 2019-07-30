/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import NewGame from './newGame';
import Scorecard from './scorecard';

const AppNavigator = createStackNavigator(
  {
    New: NewGame,
    Scorecard: Scorecard
  },
  {
    initialRouteName: "New",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
