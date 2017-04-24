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
                            <Icon name='ios-arrow-round-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Answer 1 </Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>
                    <Text> Patient should be able to respond with three most important medications </Text>
                  
                    <Button round success onPress= {() => {this.props.navigator.pop()}}  ><Text> back to quiz</Text></Button>


                </Content>

            </Container>
      );
    }

}