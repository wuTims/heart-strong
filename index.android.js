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
import R1 from './app/Resource/R1';
import R2 from './app/Resource/R2';
import R3 from './app/Resource/R3';
import R4 from './app/Resource/R4';
import FAQ from './app/Resource/FAQ';
import JournalInput from './app/Journal/JournalInput';
import CurriculumScreen from './app/CurriculumScreen';
import Week1Content from './app/Curriculum/Week1/Week1Content';
import Week1Q1 from './app/Curriculum/Week1/Week1Q1';
import Week1A1 from './app/Curriculum/Week1/Week1A1';
import Week1Q2 from './app/Curriculum/Week1/Week1Q2';
import Week1A2 from './app/Curriculum/Week1/Week1A2';
import Week1Q3 from './app/Curriculum/Week1/Week1Q3';
import Week1Q4 from './app/Curriculum/Week1/Week1Q4';
import Week1Q5 from './app/Curriculum/Week1/Week1Q5';
import QuizFinish from './app/Curriculum/Week1/QuizFinish';
import Week2Content from './app/Curriculum/Week2/Week2Content';
import Week2Q1 from './app/Curriculum/Week2/Week2Q2';
import Week2A1 from './app/Curriculum/Week2/Week2A2';
import Week2Q2 from './app/Curriculum/Week2/Week2Q2';
import Week2A2 from './app/Curriculum/Week2/Week2A2';
import Week2Q3 from './app/Curriculum/Week2/Week2Q3';
import Week2A3 from './app/Curriculum/Week2/Week2A3';
import QuizFinishW2 from './app/Curriculum/Week2/QuizFinishW2';
import Week3Content from './app/Curriculum/Week3/Week3Content';
import Week3Q1 from './app/Curriculum/Week3/Week3Q1';
import Week3Q2 from './app/Curriculum/Week3/Week3Q2';
import Week3Q3 from './app/Curriculum/Week3/Week3Q3';
import Week4Content from './app/Curriculum/Week4/Week4Content';
import Week4Q1 from './app/Curriculum/Week4/Week4Q1';
import Week4Q2 from './app/Curriculum/Week4/Week4Q2';
import Week4Q3 from './app/Curriculum/Week4/Week4Q3';
import Week0Content from './app/Curriculum/Week0/Week0Content';
import Week0Q1 from './app/Curriculum/Week0/Week0Q1';
import Week0Q2 from './app/Curriculum/Week0/Week0Q2';
import Week0A5 from './app/Curriculum/Week0/Week0A5';
import Week0Q3 from './app/Curriculum/Week0/Week0Q3';
import Week0Q4 from './app/Curriculum/Week0/Week0Q4';
import Week0Q5 from './app/Curriculum/Week0/Week0Q5';
import QuizFinishW0 from './app/Curriculum/Week0/QuizFinishW0';
import SignUp from './app/SignupScreen';
import LogIn from './app/LoginScreen';
import AlarmSetting from './app/Setting/AlarmSetting';
import AddAlarm from './app/Setting/AddAlarm';
import EditAlarm from './app/Setting/EditAlarm';
import DataInput from './app/Data/DataInput';
import UserProfile from './app/Setting/UserProfile';
import * as firebase from 'firebase';
import Firebase from './app/includes/firebase';


export default class HeartStrong extends Component {
  constructor() {
    Firebase.initialise();
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
    if (route.name == 'R1') {
      return <R1 navigator={navigator} />
    }

    if (route.name == 'R2') {
      return <R2 navigator={navigator} />
    }

    if (route.name == 'R3') {
      return <R3 navigator={navigator} />
    }

    if (route.name == 'R4') {
      return <R4 navigator={navigator} />
    }

    if (route.name == 'FAQ') {
      return <FAQ navigator={navigator} />
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
    if (route.name == 'Week1Q3') {
      return <Week1Q3 navigator={navigator} />
    }
    if (route.name == 'Week1Q4') {
      return <Week1Q4 navigator={navigator} />
    }
    if (route.name == 'Week1Q5') {
      return <Week1Q5 navigator={navigator} />
    }
    if (route.name == 'QuizFinish') {
      return <QuizFinish navigator={navigator} />
    }
    if (route.name == 'Week2Content') {
      return <Week2Content navigator={navigator} />
    }
    if (route.name == 'Week2Q1') {
      return <Week2Q1 navigator={navigator} />
    }
    if (route.name == 'Week2A1') {
      return <Week2A1 navigator={navigator} />
    }
    if (route.name == 'Week2Q2') {
      return <Week2Q2 navigator={navigator} />
    }
    if (route.name == 'Week2A2') {
      return <Week2A2 navigator={navigator} />
    }
    if (route.name == 'Week2Q3') {
      return <Week2Q3 navigator={navigator} />
    }
    if (route.name == 'Week2A3') {
      return <Week2A3 navigator={navigator} />
    }
    if (route.name == 'QuizFinishW2') {
      return <QuizFinishW2 navigator={navigator} />
    }
    if (route.name == 'Week3Content') {
      return <Week3Content navigator={navigator} />
    }
    if (route.name == 'Week3Q1') {
      return <Week3Q1 navigator={navigator} />
    }

    if (route.name == 'Week3Q2') {
      return <Week3Q2 navigator={navigator} />
    }
    if (route.name == 'Week3Q3') {
      return <Week3Q3 navigator={navigator} />
    }
    if (route.name == 'Week4Content') {
      return <Week4Content navigator={navigator} />
    }
    if (route.name == 'Week4Q1') {
      return <Week4Q1 navigator={navigator} />
    }

    if (route.name == 'Week4Q2') {
      return <Week4Q2 navigator={navigator} />
    }
    if (route.name == 'Week4Q3') {
      return <Week4Q3 navigator={navigator} />
    }
    if (route.name == 'Week0Content') {
      return <Week0Content navigator={navigator} />
    }
    if (route.name == 'Week0Q1') {
      return <Week0Q1 navigator={navigator} />
    }

    if (route.name == 'Week0Q2') {
      return <Week0Q2 navigator={navigator} />
    }
    if (route.name == 'Week0A5') {
      return <Week0A5 navigator={navigator} />
    }
    if (route.name == 'Week0Q3') {
      return <Week0Q3 navigator={navigator} />
    }
    if (route.name == 'Week0Q4') {
      return <Week0Q4 navigator={navigator} />
    }
    if (route.name == 'Week0Q5') {
      return <Week0Q5 navigator={navigator} />
    }
    if (route.name == 'QuizFinishW0') {
      return <QuizFinishW0 navigator={navigator} />
    }
    if (route.name == 'DataInput') {
      dateSelected = route.dateSelected;
      return <DataInput navigator={navigator} date = {dateSelected}/>
    }
    if (route.name == 'AlarmSettings') {
      return <AlarmSetting navigator={navigator} />
    }
    if (route.name == 'AddAlarm') {
      return <AddAlarm navigator={navigator} />
    }
    if (route.name == 'EditAlarm') {
      return <EditAlarm navigator={navigator} />
    }
    if (route.name == 'UserProfile') {
      userInfo = route.userInfo;
      return <UserProfile navigator={navigator} userInfo = {userInfo}/>
    }
   
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator
          initialRoute={{
            name: 'Login'
          }}
          renderScene={
            this.renderScene.bind(this)
          }
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('HeartStrong', () => HeartStrong);

