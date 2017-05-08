import React, { Component } from 'react';
import { TouchableOpacity, AppRegistry, Text, StyleSheet, View, ListView, TouchableHighlight, Button, AlertIOS} from 'react-native';
import {Container, Content, Input, Icon, Left, Right, Body, Header, Title  } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import HeaderComponent from '../app/HeaderComponent';
import ListItem from '../app/ListItem';
import * as firebase from 'firebase';


/**
* Component that renders user journal entries. 
* Navigates to JournalInput for adding journal entries.
* Talks with Firebase to add and retrieve journal entries.
*/
export default class JournalScreen extends Component {
	/**
    * Initialize state fields and Firebase table reference.
    */
	constructor(props) { 
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			entry: ""
		};
		this.journalRef = this.getRef().child('journals');

	}

    /** 
    * Returns the configured Firebase reference.
    * @return {Firebase} The Firebase reference.
    */
	getRef() {
		return firebase.database().ref();
	}

	/**
	* Returns ListItem component of specified journal entry.
	* @param {Object} entry - User created journal entry.
	* @return {Component<ListItem>} ListItem - Component that renders journal entry.
	*/
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
  	/**
  	* Retrieves and renders all journal entries stored in Firebase journal table/child.
  	* @param {Object} journalRef - Firebase reference to journal table/child.
  	*/
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



	render() { 
		return (
	      	<View style={{flex: 1}}>
				  <Container>
				  	<HeaderComponent titleText='Journal' navigator={this.props.navigator}/>
					<Content>
						<TouchableOpacity style={styles.actionButtonIcon} onPress= {() => {this.navigate('JournalInput')}}>
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



