import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt, Linking,  Image} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem} from 'native-base';

/**
* Component that renders general FAQs that users may have.
*/
export default class FAQ extends Component {

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
                        <Text> This page will leave to client when they are ready for FAQs</Text> 
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
