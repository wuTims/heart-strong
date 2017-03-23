import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt, Linking} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';

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
                        <Title>Week 1 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    <Input placeholder=" Content "  style={{color: '#00c497', height: 200}} />
                    <Text> some useful Resources </Text> 
                 
                  	<Text style={{color: 'blue'}}
     				 	onPress={() => Linking.openURL('http://www.ksw-gtg.com/aha-heartfailure/#/1/')}>
  						American Heart  Association 
						</Text>

						<Text style={{color: 'blue'}}
     				 	onPress={() => Linking.openURL('http://www.heart.org/HEARTORG/Conditions/More/ConsumerHealthCare/Medication-Adherence---Taking-Your-Meds-as-Directed_UCM_453329_Article.jsp#.WL7U1tIrKUk')}>
  						American Heart  Association 
						</Text>

						<Text style={{color: 'blue'}}
     				 	onPress={() => Linking.openURL('http://greatergood.berkeley.edu/article/item/tips_for_keeping_a_gratitude_journal')}>
  						Gratitude  Journaling
						</Text>

                    <Button round success onPress= {() => {this.navigate('Week1Q1'); this.addToDB()}}  ><Text> take the quiz!</Text></Button>
                </Content>

            </Container>
      );
    }

}
