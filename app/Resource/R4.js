import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt, Linking,  Image} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem} from 'native-base';

/**
* Component that renders links to resources for Week 4.
*/
export default class R4 extends Component {

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
                        <Text style={{fontSize : 30}}> Ready for Self-care </Text> 
                        <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('http://www.webmd.com/heart-disease/heart-failure/tc/quick-tips-self-care-for-heart-failure-get-started#1')}>
                         Self Care I
                        </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://circ.ahajournals.org/content/129/3/e293')}>
                        Self Care II
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://www.hov.org/media/1112/living-will_forms.pdf')}>
                        Living Will I
                      </Text>

                       <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://formswift.com/living-will')}>
                        Living Will II
                      </Text>

                       <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://powerofattorney.com/medical-power-attorney/')}>
                        Healthcare Power of Attorney
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
