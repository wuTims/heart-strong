/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component } from 'react';
import {Content, Container, Header, Title, Button, Icon, Text, View, Footer, FooterTab} from 'native-base';
import { 
  AppRegistry } from 'react-native';
import FooterComponent from './app/FooterComponent';  

export default class AwesomeProject extends Component {
  render() {
    return (
      // <Container>
      //   <Content />
      //     <Footer >
      //         <FooterTab>
      //             <Button>
      //                 <Icon name="apps" />
      //                 <Text>Apps</Text>
      //             </Button>
      //             <Button>
      //                 <Icon name="camera" />
      //                 <Text>Camera</Text>
      //             </Button>
      //             <Button active>
      //                 <Icon active name="navigate" />
      //                 <Text>Navigate</Text>
      //             </Button>
      //             <Button>
      //                 <Icon name="person" />
      //                 <Text>Contact</Text>
      //             </Button>
      //         </FooterTab>
      //     </Footer>
      // </Container>
      <FooterComponent />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

