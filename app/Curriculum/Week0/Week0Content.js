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
                        <Title> Beginning </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

              
                  <View style={{flex:1, flexDirection: 'column'}}>
                  <Image style={styles.image} source={require('../../../img/week0Content.jpg')}/>
                    
                 
                  
                    <View style={styles.container}> 
                        <Text style={{fontWeight: 'bold'}}> Some useful Resources </Text> 
                        <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('https://www.khanacademy.org/science/health-and-medicine/circulatory-system-diseases/heart-failure/v/what-is-heart-failure')}>
                       Types of Heart Failure
                        </Text>

                     <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.heart.org/HEARTORG/Conditions/My-Life-Check---Lifes-Simple-7_UCM_471453_Article.jsp#.WL7T1tIrKUk')}>
                       Life check
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.medicinenet.com/congestive_heart_failure_chf_overview/page3.htm')}>
                        Cause of Heart Failure
                      </Text>


              
                      </View >

                      <View style={{height: 50}}>
                        <Button rounded info full onPress= {() => {this.navigate('Week0Q1')}}  ><Text style={{color: '#FFFFFF' }}> Take the quiz!</Text></Button>
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
    height: 380
  },
    
})
