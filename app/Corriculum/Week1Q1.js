import React, { Component } from 'react';

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

                 <Header>
                     <Left>
                        <Button transparent   onPress={() => {this.navigate('Week1Content')}} >
                            <Icon name='ios-arrow-round-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Question 1 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Text> What are the names of the three most important medications for your CHF?
 </Text>
                    <Input placeholder=" Answer"  style={{color: '#00c497', height: 200}} />
                   
                    <Button round success onPress= {() => {this.navigate('Week1A1')}}  ><Text> check the answer</Text></Button>
                    <Button round success onPress= {() => {this.navigate('Week1Q2')}}  ><Text> next</Text></Button>

                </Content>

            </Container>
      );
    }

}
