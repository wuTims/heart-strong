import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';

export default class ResourceScreen extends Component {
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
                            <Title>Corriculum</Title>
                        </Body>

                        <Right>
                         <Button transparent onPress={() => {this.navigate('JournalInput')}}>
                            <Icon name='add' />
                        </Button>
                        </Right>
                    </Header>

                         <ListItem>
                             <Text >Introduce to My Healthy Heart Care</Text>
                        </ListItem>
                        <ListItem>
                            <Text onPress={() => {this.navigate('Week1Content')}}>week 1</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Week 2 </Text>
                        </ListItem>
                        <ListItem>
                            <Text>week 3 </Text>
                        </ListItem>
                        <ListItem>
                            <Text> week 4 </Text>
                        </ListItem>
                        
                        
                    </Content>
                </Container>
                
                     
				<FooterComponent activeTab='tabOne' navigator={this.props.navigator}/>

			</View>  

		);
	}
}


const styles = StyleSheet.create({
  testStyle: {
    textAlign: 'center',
  }
})