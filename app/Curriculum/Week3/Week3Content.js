import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt, Linking,  Image} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem} from 'native-base';

/**
* Content template for Week 3 Curriculum 
*
*/
export default class Week3Content extends Component {

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
                        <Button transparent   onPress={() => {this.navigate('Curriculum')}} >
                            <Icon name='ios-arrow-round-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Week 3 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

              
                  <View style={{flex:1, flexDirection: 'column'}}>
                  <Image style={styles.image} source={require('../../../img/week3Content.jpg')}/>
                    
                 
                  
                    <View style={styles.container}> 
                    <Text style={{fontWeight: 'bold'}}> Some useful Resources </Text> 
                       <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://www.heart.org/idc/groups/heart-public/@wcm/@hcm/@gwtg/documents/downloadable/ucm_309068.pdfanagement')}>
                        Diet Management
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.livestrong.com/article/428352-sample-diet-for-congestive-heart-failure/')}>
                        Sample diets
                      </Text>

                       <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('https://maryrodavichwvudietetics.wordpress.com/tag/chf-meal-plan/')}>
                          Meal Plan I
                        </Text>


                      <Text style={{color: 'blue'}} onPress={() => {this.navigate('R3')}}>
                      Find More under Resources page 
                      </Text>
                      
                      </View >

                      <View style={{height: 40}}>
                        <Button rounded info full onPress= {() => {this.navigate('Week3Q1')}}  ><Text style={{color: '#FFFFFF' }}> Take the quiz!</Text></Button>
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
    height: 400
  },
    
})
