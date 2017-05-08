import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import DismissKeyboard from 'react-native-dismiss-keyboard';
import * as firebase from 'firebase';

export default class InputForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			response: "",
			animating: false
		}

		this.signup = this.signup.bind(this);
		this.userRef = this.getRef().child('users');
		this.authData; 
	}

	getRef() {
		return firebase.database().ref();
	}

	navigate(routeName) {
		this.props.navigator.push({
			name: routeName
		})
	}


	async signup() {
		DismissKeyboard();

		try {
			await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
			this.setState({
				response: "Sign up successful, redirecting to login",
				animating: true
			})

			// Current User built into firebase to retrieve uid
			this.authData = await firebase.auth().currentUser;

			this.userRef.child(this.authData.uid).set({
				email: this.state.email,
				password: this.state.password
			});

			setTimeout(() => {
				this.navigate('Login');
			}, 2000);

		} catch (error) {
			this.setState({
				response: error.toString()
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
				onPress={this.signup}>
					<Text style={styles.button}>{this.props.buttonName}</Text>
				</TouchableOpacity>
					<Text style={styles.loginText}>Already have an account?</Text>
					<Text 
					style={styles.loginTextLink}
					onPress={ () => {this.navigate('Login')}}>
					Log in
					</Text>
					<Text style={styles.response}>{this.state.response}</Text>
					<ActivityIndicator style={styles.activity} size="small" animating={this.state.animating} />
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
	response: {
		textAlign: 'center',
		paddingTop: 10
	},
	activity: {
		paddingTop: 10
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