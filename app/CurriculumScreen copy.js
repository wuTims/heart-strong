import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';
import { Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';

export default class CurriculumScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderComponent titleText='Curriculum' navigator={this.props.navigator} />
                <Content>
                <Text style={styles.testStyle}>Curriculum Screen!</Text>
                </Content>
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