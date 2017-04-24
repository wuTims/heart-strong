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
                        <Button transparent  onPress={() => {this.navigate('Week1Content')}} >
                            <Icon name='ios-arrow-round-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Answer 2 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                 <View style={{flex: 1, flexDirection: 'column'}}> 
                  <View style={{ height: 500}}> 
                    <Text style={{ textAlign: 'center', fontSize: 20}}>  Shortness of breath, weight gain, swelling of lower extremities.</Text>
                  </View>
                    <Button rounded info full onPress= {() => {this.props.navigator.pop()}}  ><Text style={{color: '#FFFFFF'}}> Back to quiz</Text></Button>
                </View>

                </Content>

            </Container>
      );
    }

}
