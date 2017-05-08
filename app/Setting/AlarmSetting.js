import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';
import { Content, ListItem, Right, Left, H2, Button} from 'native-base';
import FooterComponent from '../FooterComponent'; 
import HeaderComponent from '../HeaderComponent';
import AlarmList from './AlarmList';

export default class AlarmSetting extends Component {   
    constructor(props) {
        super(props);

        const list = [];
        {/* TODO: will get from database */}
        for (let i = 1; i < 6; i++) {
            list.push({
                title: "Medicine " + i,
                content: "10:00 am"
            });
        }
        this.state = { list };
    }
    navigate(routeName){
        this.props.navigator.push({
            name: routeName
        });
    }


    render() {
        return (
                <View style={{flex: 1}}>
                    <HeaderComponent titleText='Alarm' navigator={this.props.navigator}/>
                    <Content>
                        <View>
                            <AlarmList list= {this.state.list} navigator={this.props.navigator}/>
                        </View>
                        <View style= {{height: 100, alignItems: 'center', justifyContent:'flex-end'}}>
                            <Button onPress={() => {this.navigate('AlarmSettings')}}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15}} onPress={() => {this.navigate('AddAlarm')}}>Add Alarm</Text>
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
    Add: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
})