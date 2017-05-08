import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';

/**
* Finish Quiz template for Week 0.
*
*/
export default class QuizFinishW0 extends Component {

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
                  <View style={{flex: 1, flexDirection: 'column'}}> 
                    <View style={{ height: 500}}>
                   <Text  style = {{textAlign: 'center',fontSize: 30}}> Congradulations! </Text>
                   <Text style = {{fontSize: 20}} > You finished this week's quiz. Now go back to check your progress.</Text>
                   </View>
                    <View style={styles.buttonContainer}>
                    <Button rounded info full onPress= {() => {this.navigate('Curriculum')}}  ><Text style={{color: '#FFFFFF'}}> Back to Curriculum </Text></Button>
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
  }
    
})

