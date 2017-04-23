import React, { Component } from 'react';
import { TouchableOpacity, AppRegistry, Text, StyleSheet, View, ListView, TouchableHighlight, Button} from 'react-native';
import {Container, Content, Input, Icon, Left, Right, Body, Header, Title, ListItem  } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';
import * as firebase from 'firebase';



export default class JournalScreen extends Component {
	constructor(props) { 
		super(props);
		this.createJournals = this.createJournals.bind(this);

		this.journalRef = this.getRef().child('journals');
	}

	getRef() {
		return firebase.database().ref();
	}

// 	componentDidMount() {
// 		fetch('http://10.122.10.87:3030/', {
// 			method: 'GET'
// 		})
// 			.then((response) => response.json())
// 			.then((responseJson) => {
// 				console.log(responseJson);
// 				this.setState({dataSource: this.state.dataSource.cloneWithRows(responseJson.notes)});

// 			})
// 			.catch((error) => {
// 				console.error(error);
// 			});
// 	}

  	navigate(routeName){
	    this.props.navigator.push({
	        name: routeName
	    });
	}

	createJournals() {
		this.journalRef.set({
			testEntry1: {
				date_of_entry: "April 23",
				entry: "This is a test journal entry"
			},

			testEntry2: {
				date_of_entry: "April 24",
				entry: "This is the second test"
			}
		});
	}

	render() { 
		return (
	      	<View style={{flex: 1}}>
				  <Container>
				  	<HeaderComponent titleText='Journal' navigator={this.props.navigator}/>
					<Content>
						<TouchableOpacity style={styles.actionButtonIcon} onPress={this.createJournals}>
							<Text style={styles.textStyle}> + </Text>
						</TouchableOpacity>
						
		              </Content>
		          </Container>
					
				<FooterComponent activeTab='tabFour' navigator={this.props.navigator}/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
   	alignItems: 'center',
    padding: 10,
    height: 50,
    backgroundColor: '#F6F6F6',
  },
  actionButtonIcon: {
    alignSelf: 'stretch',
    backgroundColor: '#4286f4',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  style_separator: {
  	flex: 1,
  	height: StyleSheet.hairlineWidth,
  	backgroundColor: '#000',
  },
})



