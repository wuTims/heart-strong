import React, { Component } from 'react';
import { TouchableOpacity, AppRegistry, Text, StyleSheet, View, ListView, TouchableHighlight, Button, AlertIOS} from 'react-native';
import {Container, Content, Input, Icon, Left, Right, Body, Header, Title  } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';
import ListItem from '../app/ListItem';
import * as firebase from 'firebase';



export default class JournalScreen extends Component {
	constructor(props) { 
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			entry: ""
		};
		this.createJournals = this.createJournals.bind(this);
		this.journalRef = this.getRef().child('journals');

	}

	getRef() {
		return firebase.database().ref();
	}

	_renderItem(entry) {
	    return (
	      <ListItem entry={entry} />
	    );
 	}

  	navigate(routeName){
	    this.props.navigator.push({
	        name: routeName
	    });
	}

	componentDidMount() {
		this.listenForEntries(this.journalRef);
  	}

  	// RenderRow from listview pulls data from the DataSource which is held in the state
  	// DataSource is given a value by this listener which pulls snapshots of data from firebase (entries with two fields)
  	// CloneWithRows takes the data array pulled from firebase and clones into ListItems which is RenderRow's method call to _renderItem
  	// _renderItem's argument is the row data set by cloneWithRows
  	listenForEntries(journalRef) {
	    journalRef.on('value', (snapshot) => {

	      // get children as an array, retrieving from firebase and specifying fields to retrieve
	      var entries = [];
	      snapshot.forEach((child) => {
	        entries.push({
	          date_of_entry: child.val().date_of_entry,
	          entry: child.val().entry
	        });
	      });

	      this.setState({
	        dataSource: this.state.dataSource.cloneWithRows(entries)
	      });

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

	_addEntry() {
		AlertIOS.prompt(
			'Type note here',
			null,
			[
				{
					text: 'Add',
					onPress: (text) => {
						this.journalRef.push({
							date_of_entry: new Date().toLocaleString(),
							entry: text
						});
					}
				}, 
			],
			'plain-text'
		);
	}

	render() { 
		return (
	      	<View style={{flex: 1}}>
				  <Container>
				  	<HeaderComponent titleText='Journal' navigator={this.props.navigator}/>
					<Content>
						<TouchableOpacity style={styles.actionButtonIcon} onPress={this._addEntry.bind(this)}>
							<Text style={styles.textStyle}> + </Text>
						</TouchableOpacity>
						
						<ListView
							dataSource={this.state.dataSource}
							renderRow={this._renderItem.bind(this)}
							style={styles.listView}>
						</ListView>

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



