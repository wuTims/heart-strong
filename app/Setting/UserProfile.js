import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View , TextInput, Dimensions, Alert} from 'react-native';
import { Content, ListItem, Right, Left, H2, Button, Input, InputGroup, Icon } from 'native-base';
import FooterComponent from '../FooterComponent'; 
import HeaderComponent from '../HeaderComponent';
import Communications from 'react-native-communications';
import * as firebase from 'firebase';

const dimensionWindow = Dimensions.get('window');


export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.dataRef = this.getRef().child('user-profile');
    this.state = {
      userName: '',
      phoneNumber: '',
      doctorNumber: '',
      doctorEmail: '',
      response: ""
    }; 
    this.logout = this.logout.bind(this);
    this.getValue();

  }
	navigate(routeName){
        this.props.navigator.push({
            name: routeName
        });
  }

  componentDidMount() {
    this.getValue();
  }

  getValue(){
    this.dataRef.child('username').on('value', username => {
      this.setState({userName: username.val()})
    });
    this.dataRef.child('phonenumber').on('value', phonenumber => {
      this.setState({phoneNumber: phonenumber.val()})
    });
    this.dataRef.child('doctornumber').on('value', doctornumber => {
      this.setState({doctorNumber: doctornumber.val()})
    });
    this.dataRef.child('doctoremail').on('value', doctoremail => {
      this.setState({doctorEmail: doctoremail.val()})
    });
  }

  getRef() {
        return firebase.database().ref();
    }

  async logout() {
    try {
        await firebase.auth().signOut();
        this.setState({
          response: "loggin out"
        });
        this.navigate('Login')
      } catch (error) {
        console.log(error);
        this.setState({
          response: error.toString()
        })  
       }
    }

  render() {
  return (
          <View style={{flex: 1, flexDirection:'column'}}>
              <HeaderComponent titleText='User Profile' navigator={this.props.navigator}/>
              <Content>
              <View style={{flex:1, height: Math.round(dimensionWindow.height * 0.7)}}>
          		 <ListItem itemDivider>
    						<Text>Personal Info</Text>
    					 </ListItem>
            	 <ListItem>
                	<InputGroup>
                    	<Icon name='contact'/>
                    	<TextInput
							         style={{height: 40, width: Math.round(dimensionWindow.width * 0.9)}}
            						placeholder= "Username"
            						onChangeText={(userName) => this.dataRef.update({
                            "username": userName
                        })}
            						value={this.state.userName}
  						        />
                	</InputGroup>
                </ListItem>
                <ListItem>
                	<InputGroup>
                    	<Icon name='phone-portrait' />
                    	<TextInput
      							     style={{height: 40, width: Math.round(dimensionWindow.width * 0.9)}}
            						placeholder= "Phone Number"
            						keyboardType = 'numeric'
                        onChangeText={(phonenumber) => this.dataRef.update({
                            "phonenumber": phonenumber
                        })}            						
                        value={this.state.phoneNumber}
  						        />

                	</InputGroup>
                </ListItem>
                <ListItem itemDivider>
      						<Text>Doctor's Info</Text>
      					</ListItem>
                <ListItem>
                	<InputGroup>
                    	<Icon name='call'/>
                    	<TextInput
          							style={{height: 40, width: Math.round(dimensionWindow.width * 0.6)}}
          							keyboardType = 'numeric'
                						placeholder= {this.props.userInfo.doctorNumber}
                						onChangeText={(doctornumber) => this.dataRef.update({
                              "doctornumber": doctornumber
                            })}
                						value={this.state.doctorNumber}
            						/>
            						<Text style={{fontWeight: "bold", color: 'blue'}} onPress={() => Communications.phonecall(this.state.doctorNumber, true)}> Call </Text>
                	    <Text style={{fontWeight: "bold", color: 'blue'}} onPress={() => Communications.text(this.state.doctorNumber)}> Text </Text>

              	 </InputGroup>
                </ListItem>
                <ListItem>
                	<InputGroup>
                      <Icon name='mail'/>
                    	<TextInput
      							     style={{height: 40, width: Math.round(dimensionWindow.width * 0.7)}}
            						placeholder= {this.props.userInfo.doctorEmail}
            						onChangeText={(doctoremail) => this.dataRef.update({
                            "doctoremail": doctoremail
                        })}
            						value={this.state.doctorEmail}
          						/>
  						        <Text style={{fontWeight: "bold", color: 'blue'}} onPress={() => Communications.email(['emailAddress1', 'emailAddress2'],null,null,'My Subject','My body text')}> Email </Text>
                	</InputGroup>
                </ListItem>
                <ListItem onPress={this.logout}>
                  <Icon name='power'/>
                  <Text style={{marginLeft:10, fontWeight:'bold'}}> Logout</Text>
                </ListItem>
                <ListItem>
                  <Text> {this.state.response}</Text>
                </ListItem>
              </View>
              </Content>
              <FooterComponent navigator={this.props.navigator}/>
          </View>
  );
}
}
