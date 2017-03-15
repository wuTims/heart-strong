import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, ListView} from 'react-native';
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
				<Text>{rowData.content}</Text>
			</View>
		);
	}

	render() { 
		return (
      		<View style={{flex: 1}}>
				<HeaderComponent navigator={this.props.navigator} active=''/>
				<Text style={styles.testStyle}>Journal Screen!</Text>
				<ListView	
					dataSource={this.state.dataSource}
					renderRow={this.renderRow}>
				</ListView>
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
  }
})