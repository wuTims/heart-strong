/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component } from 'react';
import {Content, Container, Header, Title, Button, Icon, Text, View, Footer, FooterTab} from 'native-base';
import { 
  AppRegistry } from 'react-native';
import FooterComponent from './app/FooterComponent'; 

export default class AwesomeProject extends Component {
  render() {
    return (
      <FooterComponent /> 
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

