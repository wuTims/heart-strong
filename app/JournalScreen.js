import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';

export default class JournalScreen extends Component {
	render() {
		return (
      		<View style={{flex: 1}}>
				<HeaderComponent active=''/>
				<Text style={styles.testStyle}>Journal Screen!</Text>
				<FooterComponent />
			</View>
		);
	}
}


const styles = StyleSheet.create({
  testStyle: {
    textAlign: 'center',
  }
})