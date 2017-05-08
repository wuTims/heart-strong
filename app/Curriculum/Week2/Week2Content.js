import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt, Linking,  Image} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem} from 'native-base';

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
                        <Button transparent   onPress={() => {this.navigate('Curriculum')}} >
                            <Icon name='ios-arrow-round-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Week 2 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

              
                  <View style={{flex:1, flexDirection: 'column'}}>
                  <Image style={styles.image} source={require('../../../img/week2Content.jpg')}/>
                    
                 
                  
                    <View style={styles.container}> 
                        <Text style={{fontWeight: 'bold'}}> Some useful Resources </Text> 
                      	    <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('https://www.youtube.com/watch?v=7vIAgY9TqgE')}>
                            Accurate Weights
                        </Text>


        						  <Text style={{color: 'blue'}}
             				 	 onPress={() => Linking.openURL('http://www.eatingwell.com/video/6749/how-to-lower-sodium-in-your-diet/')}>
          						 Lowering Your Sodium Intake
        						  </Text>

        						   <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://sodiumbreakup.heart.org/sodium_and_your_health')}>
                        Sodium Effect on the Heart I
                      </Text>

                      <Text style={{color: 'blue'}} onPress={() => {this.navigate('R2')}}>
                      Find More under Resources page 
                      </Text>
                      
                      </View >

                      <View style={{height: 50}}>
                        <Button rounded info full onPress= {() => {this.navigate('Week1Q1'); this.addToDB()}}  ><Text style={{color: '#FFFFFF' }}> Take the quiz!</Text></Button>
                      </View>
                  </View>
                </Content>

            </Container>
      );
    }

}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center', 
    alignItems: 'center',
    height: 140
  }, 

  image: {
    flex: 1,
    width: 370, 
    height: 360
  },
    
})
