import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';
import Main from './app/src/Main';
import History from './app/src/History';

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: Main,
    History: History,
  },
  {
    initialRouteName: 'Home',
  }
);
