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
                        <Title>Week 4 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

              
                  <View style={{flex:1, flexDirection: 'column'}}>
                  <Image style={styles.image} source={require('../../../img/week4Content.jpg')}/>
                    
                 
                  
                    <View style={styles.container}> 
                        <Text style={{fontWeight: 'bold'}}> Some useful Resources </Text> 
                        <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('http://www.webmd.com/heart-disease/heart-failure/tc/quick-tips-self-care-for-heart-failure-get-started#1')}>
                         Self Care I
                        </Text>

                     <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://www.hov.org/media/1112/living-will_forms.pdf')}>
                        Living Will I
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://powerofattorney.com/medical-power-attorney/')}>
                        Healthcare Power of Attorney
                      </Text>


                      <Text style={{color: 'blue'}} onPress={() => {this.navigate('R4')}}>
                      Find More under Resources page 
                      </Text>
                      
                      </View >

                      <View style={{height: 40}}>
                        <Button rounded info full onPress= {() => {this.navigate('Week4Q1')}}  ><Text style={{color: '#FFFFFF' }}> Take the quiz!</Text></Button>
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
    width: 320, 
    height: 410
  },
    
})
