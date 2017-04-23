import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';
import { Content, ListItem, Right, Left, H2, Button} from 'native-base';
import FooterComponent from '../FooterComponent'; 
import NavigatorComponent from '../NavigatorComponent';
import HeaderComponent from '../HeaderComponent';
import Swipeout from 'react-native-swipeout';


export default class AlarmList extends Component {
    constructor(props) {
        super(props);
        var swipebutton = [
          {
            text: 'Edit',
            backgroundColor: 'grey',
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => {this.navigate('EditAlarm')} 
          },
          {
            text: 'Delete',
            backgroundColor: 'red',
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => {this.navigate('EditAlarm')}
          }
        ];

        this.state = {swipebutton};

    }

    navigate(routeName){
        this.props.navigator.push({
            name: routeName
        });
    };
    
    render() {
      return (
        <View>
          {this.props.list.map((list, index) => (
            <Swipeout right={this.state.swipebutton} 
              backgroundColor= 'transparent'
              autoClose='true'
              >
              <ListItem>
                <Left>
                    <Text>{list.title}</Text>
                </Left>
                <Text>{list.content}</Text>
              </ListItem>
            </Swipeout>
            ))}
        </View>
        );
    }

}
const styles = StyleSheet.create({
    ButtonRow: {
        flexDirection: 'row',
  },
})