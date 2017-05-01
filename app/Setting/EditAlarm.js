import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';
import { Content, ListItem, Right, Left, H2, Button} from 'native-base';
import FooterComponent from '../FooterComponent'; 
import HeaderComponent from '../HeaderComponent';

export default class EditAlarm extends Component {
    navigate(routeName){
        this.props.navigator.push({
            name: routeName
        });
    }

    render() {
        return (
                <View style={{flex: 1}}>
                    <HeaderComponent titleText='Edit Alarm' navigator={this.props.navigator}/>
                    <Content>
                        <View>
                        <Text>Edit alarm here</Text>
                        </View>
                        <View>
                        {/* TODO: need to update the list array in alarm setting*/}
                            <Button primary onPress={() => {this.navigate('AlarmSettings')}}>
                              <Text> Save </Text>
                            </Button>
                        {/* TODO: need to update the list array in alarm setting*/}
                            <Button danger onPress={() => {this.navigate('AlarmSettings')}}>
                              <Text> Delete </Text>
                            </Button>
                        </View>
                    </Content>
                    <FooterComponent navigator={this.props.navigator}/>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    ButtonRow: {
        flexDirection: 'row',
  },
})