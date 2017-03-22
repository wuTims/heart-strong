import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, ListView, TouchableHighlight} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';

export default class JournalScreen extends Component {
// 	constructor(props) { 
// 		super(props);
// 		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
// 		this.state = {dataSource: ds.cloneWithRows(['row 1', 'row 2'])};
// 	}

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

//   	navigate(routeName){
// 	    this.props.navigator.push({
// 	        name: routeName
// 	    });
// 	}

	render() { 
		return (
	      	<View style={{flex: 1}}>
				  <Container>
				  		<Header>
				  			<Left>
			                    <Title>Journals</Title>
		                    </Left>

		                    <Right>
			                    <Button transparent onPress={() => {this.navigate('JournalInput')}}>
			                        <Icon name='add' />
			                    </Button>
		                    </Right>
		                </Header>
		              <Content>

		                <ListView
		                  dataSource={this.state.dataSource}
		                  renderRow={(rowData) => 
		                  	<TouchableHighlight onPress= { () => this.navigate('JournalInput')}>
								<View style={styles.row}>
									<Text>{rowData.content}</Text>
								</View>
							</TouchableHighlight>
		                  }
		                  renderSeparator = {(sectionId, rowId) =>
					          <View
					            style={styles.style_separator}
					            key={rowId}
					          />
					      }>
		                </ListView>

		              </Content>
		          </Container>
					
				<FooterComponent activeTab='tabFour' navigator={this.props.navigator}/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
  testStyle: {
    textAlign: 'center',
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
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  style_separator: {
  	flex: 1,
  	height: StyleSheet.hairlineWidth,
  	backgroundColor: '#000',
  },
})



