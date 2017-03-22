import React, { Component } from 'react';
<<<<<<< HEAD
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import { Content } from 'native-base';
=======
import { AppRegistry, Text, StyleSheet, View, ScrollView} from 'react-native';
>>>>>>> a3512885f7a502be2bcdfbe47a8600d326aedf5a
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent';
import HeaderComponent from '../app/HeaderComponent';

export default class HomeScreen extends Component {
	render() {
		return (
      <View style={{flex: 1}}>
				<HeaderComponent navigator={this.props.navigator} active='true'/>
				<View style={styles.quoteView}>
					<Text style={styles.quote}> MOTIVATIONAL QUOTE GOES HERE </Text>
				</View>
				<ScrollView>
					<Text style={styles.alertStyle}>Notification One</Text>
					<Text style={styles.reminderStyle}>Notification Two</Text>
					<Text style={styles.alertStyle}>Notification Three</Text>
					<Text style={styles.alarmStyle}>Notification Four</Text>
					<Text style={styles.reminderStyle}>Notification Five</Text>
					<Text style={styles.alarmStyle}>Notification Six</Text>		
				</ScrollView>
				<FooterComponent navigator={this.props.navigator}/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
  alertStyle: {
    textAlign: 'center',
    color: '#ed1409',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
  },
  reminderStyle: {
    textAlign: 'center',
    color: '#01b213',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
  },
  alarmStyle: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 2,
  },
  quoteView: {
  	padding: 100,
  	backgroundColor: '#b3cffc'
  },
  quote: {
  	textAlign: 'center'
  }
})