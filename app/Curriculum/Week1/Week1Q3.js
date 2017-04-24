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
                        <Title>Question 3 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                <View style={{flex: 1, flexDirection: 'column'}}> 
                  <View style={{ height: 500}}> 
                    <Text style={{textAlign: 'center', fontSize: 20}}> When do you know you should call your doctor? </Text>
                    <Input style={{textAlign: 'center', position: 'relative'}} placeholder=" Describe the symptoms you have experienced that are warning signs to trouble."  style={{color: '#00c497', height: 200}} />
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                     <Button rounded info onPress= {() => {this.props.navigator.pop()}}  ><Text style={{color: '#FFFFFF'}}> Previous</Text></Button>
                     <Button rounded info onPress= {() => {this.navigate('Week1Q4')}}  ><Text style={{color: '#FFFFFF'}}> Next</Text></Button>
                  </View>
                </View>
                    

                </Content>

            </Container>
      );
    }

}
