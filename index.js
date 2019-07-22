/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Scorecard from './scorecard';
import NewGame from './newGame';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => Scorecard);
AppRegistry.registerComponent(appName, () => NewGame);
