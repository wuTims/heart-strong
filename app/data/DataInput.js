import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';
import * as firebase from 'firebase';
import DismissKeyboard from 'react-native-dismiss-keyboard';

var CalendarView = require('./CalendarView');

/**
* Component to handle user data input for weight, blood pressure, and heart rate.
*/
export default class DataInput extends Component {

    /**
    * Initialize state fields and functions
    * @params {props} props - Holds selected date object
    */
	constructor(props) {
		super(props);
		  this.state = {
            date: this.returnMonth() + this.props.date.getDate().toString() + ", " + this.props.date.getFullYear().toString(),
			weight: '',
            bloodPressureT: '',
            bloodPressureB: '',
            heartRate: '',
            error: 'Please fill in all the fields',
            errorMess:'',
            bloodPressureMAP: '',
            bloodPressure: 0,
		  }; 
          this.dataRef = this.getRef().child('health-data');
          this.checkFields = this.checkFields.bind(this);
	}

    navigate(routeName) {
      this.props.navigator.push({
          name: routeName
      })
    }

  /** 
  * Returns the configured Firebase reference.
  * @returns {Firebase} The Firebase reference.
  */
    getRef() {
        return firebase.database().ref();
    }

    /**
    * Returns String value of month.
    * @return {String} The String value of the month number.
    */
	returnMonth() {
		if(this.props.date.getMonth().toString() == 0) {
			return "Jan ";
		} else if(this.props.date.getMonth().toString() == 1) {
			return "Feb ";
		} else if(this.props.date.getMonth().toString() == 2) {
			return "Mar ";
		} else if(this.props.date.getMonth().toString() == 3) {
			return "April ";
		} else if(this.props.date.getMonth().toString() == 4) {
			return "May ";
		} else if(this.props.date.getMonth().toString() == 5) {
			return "June ";
		} else if(this.props.date.getMonth().toString() == 6) {
			return "July ";
		} else if(this.props.date.getMonth().toString() == 7) {
			return "Aug ";
		} else if(this.props.date.getMonth().toString() == 8) {
			return "Sept ";
		} else if(this.props.date.getMonth().toString() == 9) {
			return "Oct ";
		} else if(this.props.date.getMonth().toString() == 10) {
			return "Nov ";
		} else {
			return "Dec ";
		} 
	}

    /**
    * Saves user input data to Firebase database.
    * @param {Date} date_of_entry - The selected date.
    * @param {number} weight - The input weight.
    * @param {number} bloodPressureT - The input blood pressure T.
    * @param {number} bloodPressureB - The input blood pressure B.
    * @param {number} heartRate - The input heart rate.
    */
    checkFields(){
        DismissKeyboard();

        if(this.state.weight == '') {
            this.setState({
                errorMess: this.state.error,
            })
        } else if(this.state.bloodPressureT == '') {
            this.setState({
                errorMess: this.state.error,
            })
        } else if(this.state.bloodPressureB == '') {
            this.setState({
                errorMess: this.state.error,
            })
        } else if(this.state.heartRate == '') {
            this.setState({
                errorMess: this.state.error,
            })
        } else {
            this.setState({
                errorMess: '',
            });
            this.dataRef.child('weight').child(this.props.date.getFullYear().toString()).child(this.props.date.getMonth().toString()).child(this.props.date.getDate().toString()).set({
                "date_of_entry": this.state.date,
                "value": this.state.weight,
            });
            this.dataRef.child('bloodPressureT').child(this.props.date.getFullYear().toString()).child(this.props.date.getMonth().toString()).child(this.props.date.getDate().toString()).set({
                "date_of_entry": this.state.date,
                "value": this.state.bloodPressureT,
            });
            this.dataRef.child('bloodPressureB').child(this.props.date.getFullYear().toString()).child(this.props.date.getMonth().toString()).child(this.props.date.getDate().toString()).set({
                "date_of_entry": this.state.date,
                "value": this.state.bloodPressureB,
            });
            this.dataRef.child('heartRate').child(this.props.date.getFullYear().toString()).child(this.props.date.getMonth().toString()).child(this.props.date.getDate().toString()).set({
                "date_of_entry": this.state.date,
                "value": this.state.heartRate,
            });
            this.dataRef.child('bloodPressureMAP').child(this.props.date.getFullYear().toString()).child(this.props.date.getMonth().toString()).child(this.props.date.getDate().toString()).set({
                "date_of_entry": this.state.date,
                "value": (parseFloat(2*this.state.bloodPressureB) + parseFloat(this.state.bloodPressureT))/3,
            });
            this.props.navigator.pop()
        }
    }

	render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 10
            }}>
            <Text style={styles.titleStyle}> Entry for:  {this.state.date} </Text>
                <View style={{
					flexDirection: 'row',
					alignItems:'center', 
					padding:10
                }}>
                    <Text style={{fontSize: 18}}>
                        My Weight: </Text>
                    <TextInput
                        style={{
                            flex: .2,
                            height: 40, 
                            borderColor: 'gray', 
                            borderWidth: 1,
                            padding: 10}}
                        placeholder="Input weight"
                        keyboardType='numeric'
                        onChangeText={(weight) => this.setState({weight})}
                        >
                    </TextInput>
                </View>
                <View>
                    <Text> </Text>
                </View>
                <View style={{
	                flexDirection: 'row',
	                alignItems:'center',
                	padding:10

                }}>
                    <Text style={{fontSize: 18}}>
                        My Blood Pressure: </Text>
                    <TextInput
                        style={{
                            flex: .3,
                            height: 40, 
                            borderColor: 'gray', 
                            borderWidth: 1,
                            width: 100,
                            padding: 10}}
                        keyboardType='numeric'
                        onChangeText={(bloodPressureT) => this.setState({bloodPressureT})}
                        >
                    </TextInput>
                    <Text style={{flex: .1, fontSize: 18}}> / </Text>
                    <TextInput
                        style={{
                            flex: .3,
                            height: 40, 
                            borderColor: 'gray', 
                            borderWidth: 1,
                            width: 100,
                            padding: 10}}
                        keyboardType='numeric'
                        onChangeText={(bloodPressureB) => this.setState({bloodPressureB})}
                        >
                    </TextInput>
                </View>
                <View>
                    <Text> </Text>
                </View>
                <View style={{
	                flexDirection: 'row',
	                alignItems:'center',
	                padding:10

                }}>
                    <Text style={{fontSize: 18}}>
                        My Heart Rate: </Text>
                    <TextInput
                        style={{
                            height: 40, 
                            borderColor: 'gray', 
                            borderWidth: 1,
                            width: 200,
                            padding: 10}}
                        placeholder="Input heart rate"
                        keyboardType='numeric'
                        onChangeText={(heartRate) => this.setState({heartRate})}>
                    </TextInput>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text>{this.state.errorMess}</Text>
                </View>
                <View> 
                    <Button 
						title="Save" 
                        onPress={() => {this.checkFields()}} 
                        />
                </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
  titleStyle: {
  	color:'black',
  	fontWeight: 'bold',
    fontSize: 20
  }
})

