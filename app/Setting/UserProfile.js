import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View , TextInput, Dimensions} from 'react-native';
import { Content, ListItem, Right, Left, H2, Button, Input, InputGroup, Icon } from 'native-base';
import FooterComponent from '../FooterComponent'; 
import NavigatorComponent from '../NavigatorComponent';
import HeaderComponent from '../HeaderComponent';
import Communications from 'react-native-communications';

const dimensionWindow = Dimensions.get('window');

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userInfo.userName,
      phoneNumber: this.props.userInfo.phoneNumber,
      doctorNumber: this.props.userInfo.doctorNumber,
      doctorEmail: this.props.userInfo.doctorEmail,
    }
  }
	navigate(routeName){
        this.props.navigator.push({
            name: routeName
        });
  }

  render() {
  return (
          <View style={{flex: 1}}>
              <HeaderComponent titleText='User Profile' navigator={this.props.navigator}/>
              <Content>
          		<ListItem itemDivider>
    						<Text>Personal Info</Text>
    					</ListItem>
            	<ListItem>
                	<InputGroup>
                    	<Icon name='contact'/>
                    	<TextInput
							         style={{height: 40, width: Math.round(dimensionWindow.width * 0.9)}}
            						placeholder= "Username"
            						onChangeText={(userName) => this.setState({userName})}
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
          						onChangeText={(phoneNumber) => this.setState({phoneNumber})}
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
              						onChangeText={(doctorNumber) => this.setState({doctorNumber})}
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
          						onChangeText={(doctorEmail) => this.setState({doctorEmail})}
          						value={this.state.doctorEmail}
        						/>
						        <Text style={{fontWeight: "bold", color: 'blue'}} onPress={() => Communications.email(['emailAddress1', 'emailAddress2'],null,null,'My Subject','My body text')}> Email </Text>
              	</InputGroup>
              </ListItem>
              </Content>
              <FooterComponent navigator={this.props.navigator}/>
          </View>
  );
}
}
