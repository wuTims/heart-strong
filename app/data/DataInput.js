import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native'

export default class DataInput extends Component {
	constructor() {
		super();
		  this.state = {
			date: new Date()  
		  } 
	}

    navigate(routeName) {
      this.props.navigator.push({
          name: routeName
      })
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
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 10
            }}>
            <Text style={styles.titleStyle}> { this.returnMonth() + this.state.date.getDate().toString() + ", " + this.state.date.getFullYear().toString() } </Text>
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
                        >
                    </TextInput>
                </View>
                <View style={styles.buttonstyle}> 
                    <Button 
						title="Save" 
						color="#841584"
                        onPress={() => {this.props.navigator.pop()}} 
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
    fontSize: 30
  }
})

