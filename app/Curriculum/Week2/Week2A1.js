import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';

/**
* Answer template for Week 1 Question 1
*
*/
export default class Week2A1 extends Component {

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
                        <Button transparent   onPress={() => {this.navigate('Week2Content')}} >
                            <Icon name='ios-arrow-round-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Answer 1 </Title>
                    </Body>
                    <Right/>
                </Header>

                <Content>
                  <View style={{flex: 1, flexDirection: 'column'}}> 
                  <View style={{ height: 500}}> 
                    <Text style={{ textAlign: 'center', fontSize: 20 }}> When there’s extra sodium in your bloodstream, 
                    it pulls water into your blood vessels, increasing the total amount (volume) of blood inside your 
                    blood vessels. When the heart is able to pump as well as it should this extra fluids settle in the 
                    extremities and in the lung causing  symptom </Text>
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
