import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, Dimensions} from 'react-native';
import { Icon } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';

export default class CalendarView extends Component {
	constructor() {
		super();
		  this.state = {
			date: new Date()  
		  } 
	}

	getSelectedDate() {
		var date = this.state.date;
		this.setState({date: date});
	}

	navigate(routeName, date){
        this.props.navigator.push({
            name: routeName, 
            dateSelected: date
        });
    }

	onDateChange(date) {
		this.setState({ date: date });
	}

	returnMonth() {
		if(this.state.date.getMonth().toString() == 0) {
			return "Jan ";
		} else if(this.state.date.getMonth().toString() == 1) {
			return "Feb ";
		} else if(this.state.date.getMonth().toString() == 2) {
			return "Mar ";
		} else if(this.state.date.getMonth().toString() == 3) {
			return "April ";
		} else if(this.state.date.getMonth().toString() == 4) {
			return "May ";
		} else if(this.state.date.getMonth().toString() == 5) {
			return "June ";
		} else if(this.state.date.getMonth().toString() == 6) {
			return "July ";
		} else if(this.state.date.getMonth().toString() == 7) {
			return "Aug ";
		} else if(this.state.date.getMonth().toString() == 8) {
			return "Sept ";
		} else if(this.state.date.getMonth().toString() == 9) {
			return "Oct ";
		} else if(this.state.date.getMonth().toString() == 10) {
			return "Nov ";
		} else {
			return "Dec ";
		} 
	}
 
	render() {
		return (
			<View>
				<View style={{margin: 30}}>
					<CalendarPicker 
						selectedDate={this.state.date}
						onDateChange={this.onDateChange.bind(this)}
						screenWidth={Dimensions.get('window').width}
						selectedBackgroundColor={'#0bac10'} /> 
				</View>
				<View>
					<Button 
						title= {"Entry for: " + this.returnMonth() + this.state.date.getDate().toString()} 
						color="#F5B6FC"
                        backgroundColor="#FFFFFF"
                        onPress = { () => {this.navigate('DataInput', this.state.date)}} /> 
				</View>
			</View>
		);
	}
}