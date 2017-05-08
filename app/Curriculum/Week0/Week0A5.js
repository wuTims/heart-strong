import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';

/**
* Answer template for Week 0 Question 5
*
*/
export default class Week0A5 extends Component {

  navigate(routeName) {
      this.props.navigator.push({
          name: routeName
      })
  }

  render(){
      return (
         <Container>

                 <Header>
                    <Left>
                        <Button transparent   onPress={() => {this.navigate('Week0Content')}} >
                            <Icon name='ios-arrow-round-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Answer 5 </Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>
                  <View style={{flex: 1, flexDirection: 'column'}}> 
                  <View style={{ height: 500}}> 
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>  High Blood Pressure </Text>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>  Pregnancy </Text>
                   <Text style={{ textAlign: 'center', fontSize: 20 }}> Coronary Artery  Disease </Text>
                    </View>
                  <View style={{ height: 50}}>
                    <Button  rounded info full onPress= {() => {this.props.navigator.pop()}}  ><Text style={{color: '#FFFFFF'}}> Back to quiz</Text></Button>
                  </View>
                </View>

                </Content>

            </Container>
      );
    }

}
