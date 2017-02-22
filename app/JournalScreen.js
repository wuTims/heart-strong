import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import {Container, Content, InputGroup, Input, Icon, Button, Left, Right, Body, Header, Title,  ListItem } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';


var journalList = React.createClass({
    render(){
      return(
           <Container>
                <Content>
                <Header>
                    
                    <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                    <Body>
                        <Title>Journals</Title>
                    </Body>
                    <Right />
                </Header>
                     <ListItem>
                        <Text>I feel good today!</Text>
                    </ListItem>
                    <ListItem>
                        <Text>need drink more water </Text>
                    </ListItem>
                    <ListItem>
                        <Text>feeling lonely...  </Text>
                    </ListItem>
                    <ListItem>
                        <Text>feeling longely still </Text>
                    </ListItem>
                    <ListItem>
                        <Text> my back hurts </Text>
                    </ListItem>
                    <ListItem>
                        <Text> met a nice girl </Text>
                    </ListItem>
                    <ListItem>
                        <Text> great dinner </Text>
                    </ListItem>
                    <ListItem>
                        <Text> see doctor tomorrow  </Text>
                    </ListItem>
                    <ListItem>
                        <Text>LOVE THIS APP! </Text>
                    </ListItem>
                    
                </Content>
            </Container>

      );

    }
 });

 var input = React.createClass({
    render(){
      return (
         <Container>

                 <Header>
                    <Left/>
                    <Body>
                        <Title>New Journal</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                   
                    <Input placeholder="Date"  style={{color: '#00c497', height:50}} />
                    <Input placeholder="Anything new today? "  style={{color: '#00c497', height: 200}} />
                    <Button round success ><Text> submit </Text></Button>
                </Content>




            </Container>
      );
    }
 });

 const styles = StyleSheet.create({
  testStyle: {
    textAlign: 'center',
  }
})


