import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class AppContainer extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => AppContainer);