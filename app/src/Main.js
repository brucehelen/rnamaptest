import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { MapView } from 'react-native-amap3d';

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: <Text>首页</Text>,
      headerRight: (
        <Button onPress={params.increaseCount} title="jump" color="green" />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
    this.props.navigation.push('History');
  };

  render() {
    return (
      <MapView zoomLevel={12} style={StyleSheet.absoluteFill}>
      </MapView>
    )
  }
}
