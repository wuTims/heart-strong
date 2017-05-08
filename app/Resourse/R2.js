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
                        <Text style={{fontSize : 30}}> Norishing the Body </Text> 
                        <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('http://www.heartfailure.org/prevention/health-tools/#')}>
                           Weight Chart & Body Mass Index (BMI) Calculator
                        </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://sodiumbreakup.heart.org/sodium_and_your_health')}>
                        Sodium Effect on the Heart I
                      </Text>

                      <Text style={{color: 'blue'}}
                         onPress={() => Linking.openURL('https://nursing.advanceweb.com/sharedresources/advancefornurses/resources/DownloadableResources/nurseweightfeb18.pdf')}>
                        Sodium Effect on the Heart II
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://www.youtube.com/watch?v=uSrzcy9E2Qw')}>
                         Sodium Video
                      </Text>

                      <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('http://www.eatingwell.com/video/6749/how-to-lower-sodium-in-your-diet/')}>
                           Lowering Your Sodium Intake
                        </Text>

                        <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('https://www.youtube.com/watch?v=7vIAgY9TqgE')}>
                            Accurate Weights
                        </Text>

                        <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('http://www.heartfailurematters.org/en_GB/Warning-signs/Rapid-weight-gain')}>
                           Warning Signs I
                        </Text>

                         <Text style={{color: 'blue'}}
                            onPress={() => Linking.openURL('http://www.webmd.com/heart-disease/heart-failure/checking-your-weight-when-you-have-heart-failure')}>
                           Warning Signs II
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
    
  }, 

  image: {
    flex: 1,
    width: 320, 
    height: 360
  },
    
})
