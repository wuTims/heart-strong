import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import { Content } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent';
import HeaderComponent from '../app/HeaderComponent';

export default class HomeScreen extends Component {
	render() {
		return (
	      		<View style={{flex: 1}}>
					<HeaderComponent navigator={this.props.navigator} active='true'/>
					<Content>
					<Text style={styles.testStyle}>Home Screen!</Text> 
					</Content>
					<FooterComponent navigator={this.props.navigator}/>
				</View>
		);
	}
}


const styles = StyleSheet.create({
  testStyle: {
    textAlign: 'center',
  }
})