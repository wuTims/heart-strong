import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';

export default class JournalInput extends Component {

  constructor(props){
    super(props);
    this.state = {
        note: "",
        date: new Date()
    };
  }

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

                 <Header>
                     <Left>
                        <Button transparent   onPress={() => {this.props.navigator.pop()}} >
                            <Icon name='ios-arrow-round-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title>New Journal</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                   
                    <Input placeholder="Date"  style={{color: '#00c497', height:50}} />
                    <Input placeholder="Anything new today? " 
                          onChangeText={(text) => {
                            this.setState({note: text})
                          }}  
                    style={{color: '#00c497', height: 200}} />
                    <Button round success onPress= {() => {this.navigate('Journal'); this.addToDB()}}  ><Text> submit </Text></Button>
                </Content>

            </Container>
      );
    }

}
