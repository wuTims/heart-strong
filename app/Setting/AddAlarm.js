import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';
import { Content, ListItem, Right, Left, H2, Button} from 'native-base';
import FooterComponent from '../FooterComponent'; 
import HeaderComponent from '../HeaderComponent';
import DatePicker from 'react-native-datepicker'

export default class AddAlarm extends Component {
    constructor(props){
        super(props)
        this.state = {time: '20:00'}
    }
    navigate(routeName){
        this.props.navigator.push({
            name: routeName
        });
    }

    render() {
        return (
                <View style={{flex: 1}}>
                    <HeaderComponent titleText='Add Alarm' navigator={this.props.navigator}/>
                    <Content>
                    <View style={{flexDirection: 'column'}}>
                        <View style={styles.container}>
                            <DatePicker
                              style={{width: 200}}
                              date={this.state.time}
                              mode="time"
                              androidMode="default"
                              format="HH:mm"
                              confirmBtnText="Confirm"
                              cancelBtnText="Cancel"
                              showIcon="false"
                              minuteInterval={10}
                              onDateChange={(time) => {this.setState({time: time});}}
                            />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                        {/* TODO: need to update the list array in alarm setting*/}
                            <Button primary onPress={() => {this.navigate('AlarmSettings')}}>
                              <Text> Save </Text>
                            </Button>
                            <Text> </Text>
                        {/* TODO: need to update the list array in alarm setting*/}
                            <Button danger onPress={() => {this.navigate('AlarmSettings')}}>
                              <Text> Delete </Text>
                            </Button>
                        </View>
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
    container: {
        flex: 1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    instructions: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5
    }
})