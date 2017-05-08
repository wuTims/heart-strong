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
                        <Button transparent   onPress={() => {this.navigate('Resources')}} >
                            <Icon name='ios-arrow-round-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Resources </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

              
                  <View style={{flex:1, flexDirection: 'column'}}>
                  
                    
                 
                  
                    <View style={styles.container}> 
                        <Text style={{fontSize : 30}} > Survival Skills </Text> 
                        <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('http://www.ksw-gtg.com/aha-heartfailure/#/1/')}>
                          Healthy Living with Heart Failure
                        </Text>

                         <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('http://www.webmd.com/women/features/serious-symptoms#1')}>
                          Symptom to Not Ignore
                        </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.heart.org/HEARTORG/Conditions/More/ConsumerHealthCare/Medication-Adherence---Taking-Your-Meds-as-Directed_UCM_453329_Article.jsp#.WL7U1tIrKUk')}>
                        Medication Adherence - Taking Your Meds as Directed 
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.webmd.com/heart-disease/heart-failure/avoiding-triggers-for-sudden-heart-failure')}>
                      Triggers of heart Sudden Onset of Heart Failure

                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://greatergood.berkeley.edu/article/item/tips_for_keeping_a_gratitude_journal')}>
                        Tips for Keeping a Gratitude Journal
                      </Text>

                      <Text>
                      ...
                      </Text>

                      <Text > 
                        Keep adding more when client when clients require
                      </Text>

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
    height: 360
  },
    
})
