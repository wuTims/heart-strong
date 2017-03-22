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
                        <Title>Question 2 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Text>What are your symptoms when you are being to get in trouble with your CHF?
</Text>
                    <Input placeholder=" Answer"  style={{color: '#00c497', height: 200}} />
                    <Button round success onPress= {() => {this.props.navigator.pop()}}  ><Text> previous</Text></Button>
                    <Button round success onPress= {() => {this.navigate('Week1A2')}}  ><Text> check the answer</Text></Button>
                    <Button round success onPress= {() => {this.navigate('QuizFinish')}}  ><Text> finish</Text></Button>

                </Content>

            </Container>
      );
    }

}
