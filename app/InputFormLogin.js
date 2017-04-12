import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import DismissKeyboard from 'react-native-dismiss-keyboard';
import * as firebase from 'firebase';


export default class InputFormLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			response: ""
		};

		this.login = this.login.bind(this);
	}

	navigate(routeName) {
		this.props.navigator.push({
			name: routeName
		})
	}

	async login() {
		DismissKeyboard();

		try {
			await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
			setTimeout(() => {
				this.navigate('Home')
			}, 1500);
		} catch (error) {
			this.setState({
				response: 'Invalid Login'
			})
		}
	}

	render () {
		return (
			<View style={styles.container}>
				<TextInput 
				placeholder="Email"
				keyboardType="email-address"
				onChangeText = {(email) => this.setState({email})}
				style={styles.input} 
				/>
				<TextInput 
				placeholder="Password"
				onChangeText = {(password) => this.setState({password})}
				style={styles.input} 
				secureTextEntry
				/>
				<TouchableOpacity 
				style={styles.buttonContainer}
				onPress={this.login}>
					<Text style={styles.button}>{this.props.buttonName}</Text>
				</TouchableOpacity>
					<Text style={styles.loginText}>Don't have an account?</Text>
					<Text 
					style={styles.loginTextLink}
					onPress={() => {this.navigate('Signup')}}>
					Sign up
					</Text>
					<Text>{this.state.response}</Text>
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