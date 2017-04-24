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
					<Text style={styles.dateText}>{this.props.entry.date_of_entry}</Text>
					<Text style={styles.listText}>{this.props.entry.entry}</Text>
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
	dateText: {
		color: '#595959',
		fontSize: 10,
		textAlign: 'center',
		paddingBottom: 7,
	},
	listText: {
		color: '#333',
    	fontSize: 16,
	},
});