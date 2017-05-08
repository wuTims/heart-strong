import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, Dimensions, TextInput, Button, TouchableHighlight} from 'react-native';
import { Header, Container, Content, Tab, Tabs, ListItem, Title, Picker, Item} from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import HeaderComponent from '../app/HeaderComponent';
import CalendarPicker from 'react-native-calendar-picker';
import CalendarView from '../app/Data/CalendarView';
import DataInput from '../app/Data/DataInput';
import * as fixtures from '../app/Data/Data';
import GraphPage from '../app/Data/GraphPage';

export default class DataScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: fixtures.userData,
            selectedItem: undefined,
            selected1: '1',
            type: 'weight',
            results: {
                items: []
            }
        }
    };

    navigate(routeName) {
      this.props.navigator.push({
          name: routeName
      })
    };

    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }

    

    render() {
        return (
            <Container>
                <HeaderComponent titleText='Data' navigator={this.props.navigator} active=''/>
                <Content>
                        <View style={{flex: 1}}>
                                <Tabs>
                                    <Tab heading="Calendar">
                                        <CalendarView navigator={this.props.navigator}/>
                                    </Tab>
                                    <Tab heading="Graph">
                                        <Picker
                                            mode="dropdown"
                                            selectedValue={this.state.selected1}
                                            onValueChange={this.onValueChange.bind(this)}>
                                            <Item label="This Week" value="1" />
                                            <Item label="Last Week" value="2" />
                                        </Picker>
                                        <GraphPage data={this.state.data} value={this.state.selected1} type={this.state.type}/>
                                        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                                            <Button 
                                                title= 'Weight'
                                                onPress={() => this.setState({ type: 'weight' })}
                                            />
                                            <Button 
                                                title= 'Blood Pressure'
                                                onPress={() => this.setState({ type: 'bloodpressure' })}
                                            />
                                            <Button 
                                                title= 'Heart Rate'
                                                onPress={() => this.setState({ type: 'heartrate' })}
                                            />
                                        </View>
                                    </Tab>
                                </Tabs>
                                <Content>
                                </Content>
                        </View>
                </Content>
                <FooterComponent activeTab='tabFive' navigator={this.props.navigator}/>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    ButtonRow: {
        flexDirection: 'row',
  },
})
