import React, { Component } from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class ListItem extends Component {
	navigate(routeName) {
		this.props.navigator.push({
			name: routeName
		})
	}

	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress}>	
				<View style={styles.list}>
					<Text style={styles.listText}>{this.props.entry.date}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	list: {
	    backgroundColor: '#fff',
	    borderBottomColor: '#eee',
	    borderColor: 'transparent',
	    borderWidth: 1,
	    padding: 10,
	},
	listText: {
		color: '#333',
    	fontSize: 16,
	},
});