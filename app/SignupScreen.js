import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import InputForm from './InputForm';
import * as firebase from 'firebase';

/**
* Component for user signup. Renders InputForm component for user to fill out.
*/
export default class SignupScreen extends Component {

	navigate(routeName) {
		this.props.navigator.push({
			name: routeName
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image source={require('../img/strongHeart.png')} style={styles.image} />
					<Text style={styles.title}> HeartStrong </Text>
				</View>
				<View style={styles.formContainer}>
					<InputForm navigator={this.props.navigator} buttonName='Sign Up'/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff4d3'
	},
	image: {
		width: 200,
		height: 100
	},
	logoContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1
	},
	title: {
		marginTop: 10,
		fontSize: 20
	}
})