import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

export default class InputForm extends Component {
	navigate(routeName) {
		this.props.navigator.push({
			name: routeName
		})
	}

	render () {
		return (
			<View style={styles.container}>
				<TextInput 
				placeholder="Email"
				style={styles.input} 
				/>
				<TextInput 
				placeholder="Password"
				style={styles.input} 
				secureTextEntry
				/>
				<TouchableOpacity 
				style={styles.buttonContainer}
				onPress={ () => {this.navigate('Login')}}>
					<Text style={styles.button}>{this.props.buttonName}</Text>
				</TouchableOpacity>
					<Text style={styles.loginText}>Already have an account?</Text>
					<Text 
					style={styles.loginTextLink}
					onPress={ () => {this.navigate('Login')}}>
					Log in
					</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 40,
		marginBottom: 110
	},
	input: {
		height: 40,
		backgroundColor: '#fff9ea',
		marginBottom: 20,
		paddingHorizontal: 10,
		borderColor: 'black',
		borderWidth: 1
	},
	buttonContainer: {
		paddingHorizontal: 10,
		backgroundColor: '#fff',
		paddingVertical: 10,
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 10
	},
	button: {
		textAlign: 'center'
	},
	loginText: {
		textAlign: 'center',
		paddingTop: 20,
		opacity: 0.8
	},
	loginTextLink: {
		textDecorationLine: 'underline',
		paddingTop: 10,
		textAlign: 'center',
		opacity: 0.8
	}

});