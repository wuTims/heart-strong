import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import {Container, Content, Input, Icon, Button,Left, Right, Body, Header, Title, ListItem  } from 'native-base';
import FooterComponent from '../../../app/FooterComponent'; 

/**
* Question template for Week 2 Question 1
*
*/
export default class Week1Q1 extends Component {

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
                        <Button transparent onPress={() => {this.navigate('Week2Content')}} >
                            <Icon name='ios-arrow-round-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Question 1 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                <View style={{flex: 1, flexDirection: 'column'}}> 
                  <View style={{ height: 500}}> 
                    <Text style={{ textAlign: 'center', fontSize: 20}}>  How does sodium affect your CHF condition? </Text>
                   
                    <Input placeholder=" Answer"  style={{color: '#00c497', height: 200}} />
                  </View> 
                    
                  <View style={styles.buttonContainer} >
                    <Button  rounded info onPress= {() => {this.navigate('Week2A1')}}  ><Text style={{color: '#FFFFFF'}} > Chcek the answer</Text></Button>
                    <Button rounded info onPress= {() => {this.navigate('Week2Q2')}}  ><Text style={{color: '#FFFFFF'}}> Next</Text></Button>
                  </View>
                </View> 
                    
                </Content>
    
            </Container>
      );
    }
}

const styles = StyleSheet.create({

  buttonContainer: {
    height: 50,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
     marginBottom: 0,

   
  
  }
    
})
