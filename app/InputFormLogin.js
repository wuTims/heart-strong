import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';

export default class InputFormLogin extends Component {
	navigate(routeName) {
		this.props.navigator.push({
			name: routeName
		})
	}

	render () {
		return (
			<View style={styles.container}>
				<TextInput 
				placeholder="Login Pin"
				style={styles.input} 
				/>
				<TouchableOpacity 
				style={styles.buttonContainer}
				onPress={ () => {this.navigate('Home')}}>
					<Text style={styles.button}>{this.props.buttonName}</Text>
				</TouchableOpacity>
					<Text style={styles.loginText}>Don't have an account?</Text>
					<Text 
					style={styles.loginTextLink}
					onPress={() => {this.navigate('Signup')}}>
					Sign up
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