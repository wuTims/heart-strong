import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import { Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
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
                <HeaderComponent titleText='Resource' navigator={this.props.navigator} />
                 <Content>
                <Text style={styles.testStyle}>Resource Screen!</Text>
                </Content>
                
                     
                <FooterComponent activeTab='tabTwo' navigator={this.props.navigator}/>

            </View>  

        );
    }
}


const styles = StyleSheet.create({
  testStyle: {
    textAlign: 'center',
  }
})