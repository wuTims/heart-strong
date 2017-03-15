

import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, ListView} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';





export default class JournalScreen extends Component {
	constructor(props) { 
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {dataSource: ds.cloneWithRows(['row 1', 'row 2'])};
	}

	componentDidMount() {
		fetch('http://192.168.0.133:3030/', {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				this.setState({dataSource: this.state.dataSource.cloneWithRows(responseJson.notes)});

			})
			.catch((error) => {
				console.error(error);
			});
	}

	renderRow(rowData) {
		return (
			<View style={styles.row}>
				<Text onPress={() => {this.navigate('JournalInput')}}>{rowData.content}</Text>
			</View>
		);
	}
  
  navigate(routeName) {
    this.props.navigator.push({
        name: routeName
    })
  }

	render() { 
		return (
      	<View style={{flex: 1}}>
				  <HeaderComponent navigator={this.props.navigator} active=''/>
				  <Container>
              <Content>
                <Header>
                    <Left/ >
                    <Body>
                        <Title>Journals</Title>
                    </Body>

                    <Right>
                     <Button transparent onPress={() => {this.navigate('JournalInput')}}>
                        <Icon name='add' />
                    </Button>
                    </Right>
                </Header>

                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow}>
                </ListView>

              </Content>
          </Container>
				
				<FooterComponent activeTab='tabTwo' navigator={this.props.navigator}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  testStyle: {
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
