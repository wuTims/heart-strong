import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';

export default class JournalInput extends Component {

  navigate(routeName) {
      this.props.navigator.push({
          name: routeName
      })
  }


  render(){
      return (
         <Container>
                <Header>
                     <Left />
                      
                   
                    <Body>
                        <Title />  
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Text>Congradulations!  </Text>
                    <Text>You finished this week's quiz. Now go back to check your progress. </Text>
                    <Button round success onPress= {() => {this.navigate('Resources')}}  ><Text> back to journal</Text></Button>


                </Content>

            </Container>
      );
    }

}
