import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';
import { Content, Title, ListItem, Right, Left, Radio, Icon, Body, Switch, Picker, Item } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';

export default class SettingScreen extends Component {
	constructor() {
		super();
		  this.state = {
			userName: 'Mary Jo',
			phoneNumber: '9199955679',
			doctorNumber: '7324473014',
			doctorEmail: "gswu@live.unc.edu",
		  } 
	}

    navigate(routeName){
	    this.props.navigator.push({
	        name: routeName,
	        userInfo: this.state
	    });
	}

	render() {
		return (
	      		<View style={{flex: 1}}>
					<HeaderComponent titleText='Settings' navigator={this.props.navigator} settings='true'/>
					<Content>
						<ListItem itemDivider>
							<Text>General</Text>
						</ListItem>
						<ListItem onPress={() => {this.navigate('UserProfile')}}>
							<Text>User Profile</Text>
						</ListItem>
						<ListItem>
							<Text>Weight Metrics</Text>
						</ListItem>
						<ListItem>
							<Text>Font Size</Text>
						</ListItem>
						<ListItem itemDivider>
							<Text>Notification Settings</Text>
						</ListItem>
						<ListItem onPress={() => {this.navigate('AlarmSettings')}}>
							<Text>Alarms</Text>
						</ListItem>
					</Content>
					<FooterComponent navigator={this.props.navigator}/>
				</View>
		);
	}
}


const styles = StyleSheet.create({
  testStyle: {
    textAlign: 'center',
  },
  icon: {
  	alignItems: 'flex-end',
  	justifyContent: 'flex-end',

  }
})
