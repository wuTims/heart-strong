

import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';





export default class JournalScreen extends Component {
    navigate(routeName) {
        this.props.navigator.push({
            name: routeName
        })
    }

	render() {
		return (
      		<View style={{flex: 1}}>

				
                <Container>
                    <Content>
                    <Header>
                        
                        <Left/ >
                        <Body>
                            <Title>Journals</Title>
                        </Body>

                        <Right>
                         <Button transparent onPress={() => {this.navigate('JournalInput')}}>
                            <Icon name='add' />
                        </Button>
                        </Right>
                    </Header>

                         <ListItem>
                             <Text onPress={() => {this.navigate('JournalInput')}}>I feel good today!</Text>
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
                
                     
				<FooterComponent navigator={this.props.navigator}/>



			</View>


            
            
		);
	}
}




 
 const styles = StyleSheet.create({
  

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }


})


