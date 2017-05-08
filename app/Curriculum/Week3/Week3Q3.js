import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import {Container, Content, Input, Icon, Button,Left, Right, Body, Header, Title, ListItem  } from 'native-base';
import FooterComponent from '../../../app/FooterComponent'; 

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
                     <Left>
                        <Button transparent onPress={() => {this.navigate('Week3Content')}} >
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
                    <Text style={{ textAlign: 'center', fontSize: 20}}> Review weigh tracker and Intake and output tracker how have you done with this task?  </Text>
                   
                    <Input placeholder="Describe some foods that are low in sodium"  style={{color: '#00c497', height: 200}} />
                  </View> 
                    
                  <View style={styles.buttonContainer} >
                   <Button rounded info onPress= {() => {this.props.navigator.pop()}}  ><Text style={{color: '#FFFFFF'}}>  Previous</Text></Button>
                    <Button rounded info onPress= {() => {this.navigate('QuizFinish')}}  ><Text style={{color: '#FFFFFF'}}> Finish</Text></Button>
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
