import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, Button } from 'react-native';
import { Content, ListItem } from 'native-base';
import FooterComponent from '../FooterComponent'; 
import NavigatorComponent from '../NavigatorComponent'
import HeaderComponent from '../HeaderComponent';

export default class MedicineList extends Component {
    navigate(routeName){
        this.props.navigator.push({
            name: routeName
        });
    }

    render() {
        return (
                <View style={{flex: 1}}>
                    <HeaderComponent titleText='Alarm Settings' navigator={this.props.navigator}/>
                    <Content>
                       <Text>Alarm Settings </Text>
                       <ListItem>
                            <Text>Medicine 1</Text>
                            <ListItem>
                                <Text>Alarm 1</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Alarm 2</Text>
                            </ListItem>
                        </ListItem>
                        <ListItem>
                            <Text>Medicine 2</Text>
                            <ListItem>
                                <Text>Alarm 1</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Alarm 2</Text>
                            </ListItem>
                        </ListItem>
                       <View style={{flex: 2, alignItems:'flex-end'}}>
                           <Button 
                            title="Save" 
                            onPress={() => {this.props.navigator.pop()}} 
                            />
                        </View>
                    </Content>
                    <FooterComponent navigator={this.props.navigator}/>
                </View>
        );
    }
}