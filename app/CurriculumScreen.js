import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import { Content, Title, ListItem, Right, Left, Radio, Icon, Body, Switch } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';
import { Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';

export default class CurriculumScreen extends Component {

      navigate(routeName) {
        this.props.navigator.push({
            name: routeName
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderComponent titleText='Curriculum' navigator={this.props.navigator} />

              <Container>
                    <Content>

                         <ListItem onPress={() => {this.navigate('Week1Content')}}>
                             <Text >Introduce to My Healthy Heart Care</Text>
                        </ListItem>
                        <ListItem onPress={() => {this.navigate('Week1Content')}}>
                            <Text > week 1</Text>
                        </ListItem>
                        <ListItem onPress={() => {this.navigate('Week1Content')}}>
                            <Text>Week 2 </Text>
                        </ListItem>
                        <ListItem onPress={() => {this.navigate('Week1Content')}}>
                            <Text>week 3 </Text>
                        </ListItem>
                        <ListItem onPress={() => {this.navigate('Week1Content')}}>
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