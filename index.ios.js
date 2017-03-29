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
import Week1Content from './app/Curriculum/Week1Content';
import Week1Q1 from './app/Curriculum/Week1Q1';
import Week1A1 from './app/Curriculum/Week1A1';
import Week1Q2 from './app/Curriculum/Week1Q2';
import Week1A2 from './app/Curriculum/Week1A2';
import QuizFinish from './app/Curriculum/QuizFinish';
import SignUp from './app/SignupScreen';
import LogIn from './app/LoginScreen';

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
    if (route.name == 'Login') {
      return <LogIn navigator={navigator} />
    }
    if (route.name == 'Signup') {
      return <SignUp navigator={navigator} />
    }
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
    if (route.name == 'Week1Content') {
      return <Week1Content navigator={navigator} />
    }
    if (route.name == 'Week1Q1') {
      return <Week1Q1 navigator={navigator} />
    }
    if (route.name == 'Week1A1') {
      return <Week1A1 navigator={navigator} />
    }
    if (route.name == 'Week1Q2') {
      return <Week1Q2 navigator={navigator} />
    }
    if (route.name == 'Week1A2') {
      return <Week1A2 navigator={navigator} />
    }
    if (route.name == 'QuizFinish') {
      return <QuizFinish navigator={navigator} />
    }
    if (route.name == 'DataInput') {
      dateSelected = route.dateSelected;
      return <DataInput navigator={navigator} date = {dateSelected}/>
    }

   
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator
          initialRoute={{
            name: 'Signup'
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

