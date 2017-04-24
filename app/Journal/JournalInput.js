import React, { Component } from 'react';
import HeaderComponent from '../../app/HeaderComponent';
import FooterComponent from '../../app/FooterComponent';


import { AppRegistry, Text, StyleSheet, View,alertrt} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';

export default class JournalInput extends Component {

  navigate(routeName) {
      this.props.navigator.push({
          name: routeName
      })
  }

  addToDB() {
   
  }

  render(){
      return (
         <Container>
            <HeaderComponent titleText='New Journal' navigator={this.props.navigator} />

            <Content>
               
                <Input placeholder="Date"  style={{color: '#00c497', height:50}} />
                <Input placeholder="Anything new today? "  style={{color: '#00c497', height: 200}} />
                <Button round success onPress= {() => {this.navigate('Journal'); this.addToDB()}}  ><Text> submit </Text></Button>
            </Content>
            <FooterComponent activeTab='tabFour' navigator={this.props.navigator}/>
        </Container>
      );
    }

}
