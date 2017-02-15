import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
    Button, Footer, FooterTab, Title, Header,Container, Content, Col, Icon, InputGroup, Input, Grid, Row
} from 'native-base';

export default class test extends Component {
  render() {
    return (
        <Container>
                <Header>
                    <Button transparent>
                        <Icon name="menu" />
                    </Button>

                    <Text>Header</Text >

                    <Button transparent>
                        <Icon name="heart"/>
                    </Button>
                </Header>

                <Content>
                    <InputGroup borderType="underline" keyboardType = 'numeric'>
                        <Icon name="heart" style={{color:'#384850'}}/>
                        <Input placeholder="Heart Rate" />
                    </InputGroup>
                </Content>

                <Footer >
                    <FooterTab>
                      <Button>
                          <Icon name="calendar" />
                      </Button>
                      <Button>
                          <Icon name="camera" />
                      </Button>
                      <Button active>
                          <Icon name="heart" />
                      </Button>
                      <Button>
                          <Icon name="bookmarks" />
                      </Button>
                    </FooterTab>
                </Footer>
            </Container>
    );
  }
}


var styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#aaff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    }, 
    content: {
        backgroundColor:'#82d3ef',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'column' 
    }
});

AppRegistry.registerComponent('test', () => test);
