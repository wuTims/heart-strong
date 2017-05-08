import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt, Linking,  Image} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem} from 'native-base';
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
                        <Button transparent   onPress={() => {this.navigate('Curriculum')}} >
                            <Icon name='arrow-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Week 1 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

              
                  <View style={{flex:1, flexDirection: 'column'}}>
                  <Image style={styles.image} source={require('../../../img/week1Content.jpg')}/>
                    
                 
                  
                    <View style={styles.container}> 
                        <Text style={{fontWeight: 'bold'}}> Some useful Resources </Text> 
                      	<Text style={{color: 'blue'}}
             				 	     onPress={() => Linking.openURL('http://www.ksw-gtg.com/aha-heartfailure/#/1/')}>
          					 	     Healthy Living with Heart Failure
        						    </Text>

        						  <Text style={{color: 'blue'}}
             				 	 onPress={() => Linking.openURL('http://www.heart.org/HEARTORG/Conditions/More/ConsumerHealthCare/Medication-Adherence---Taking-Your-Meds-as-Directed_UCM_453329_Article.jsp#.WL7U1tIrKUk')}>
          						 Symptom to Not Ignore
        						  </Text>

        						  <Text style={{color: 'blue'}}
             				 	 onPress={() => Linking.openURL('http://greatergood.berkeley.edu/article/item/tips_for_keeping_a_gratitude_journal')}>
          						  Tips for Keeping a Gratitude Journal
        						  </Text>

                      <Text  style={{color: 'blue'}} onPress={() => {this.navigate('R1')}}>
                      Find More under Resources page 
                      </Text>

                      </View >

                      <View style={{height: 50}}>
                        <Button rounded info full onPress= {() => {this.navigate('Week1Q1')}}  ><Text style={{color: '#FFFFFF' }}> Take the quiz!</Text></Button>
                      </View>
                  </View>
                </Content>
                <FooterComponent activeTab='tabOne' navigator={this.props.navigator}/>
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
