/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component } from 'react';
import {Content, Container, Header, Title, Button, Icon, Text, Footer, FooterTab, Left, Body, Right} from 'native-base';
import { 
  AppRegistry,
  View,
  StyleSheet,
  Navigator } from 'react-native';
import FooterComponent from './app/FooterComponent'; 
import NavigatorComponent from './app/NavigatorComponent';
import HeaderComponent from './app/HeaderComponent';
import HomeScreen from './app/HomeScreen';
import SettingScreen from './app/SettingScreen';
import DataScreen from './app/DataScreen';
import JournalScreen from './app/JournalScreen';
import ResourceScreen from './app/ResourceScreen';
import JournalInput from './app/Journal/JournalInput';
import CurriculumScreen from './app/CurriculumScreen';

export default class AwesomeProject extends Component {
  constructor() {
    super();
    this.state = {
      homePressed: true
    }
  }

  /*
  * TODO: Clean the code up by using switch statements instead of ifs.
  */
  renderScene(route, navigator) {
    if (route.name == 'Home') {
      return <HomeScreen navigator={navigator} />
    }
    if (route.name == 'Curriculum') {
      return <CurriculumScreen navigator={navigator} />
    }
    if (route.name == 'Resources') {
      return <ResourceScreen navigator={navigator} />
    }
    if (route.name == 'Journal') {
      return <JournalScreen navigator={navigator} />
    }
    if (route.name == 'Data') {
      return <DataScreen navigator={navigator} />
    }
    if (route.name == 'Settings') {
      return <SettingScreen navigator={navigator} />
    }
    if (route.name == 'JournalInput') {
      return <JournalInput navigator={navigator} />
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator
          initialRoute={{
            name: 'Home'
          }}
          renderScene={
            this.renderScene.bind(this)
          }
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

