import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, Dimensions, TextInput, Button} from 'react-native';
import { Header, Container, Content, Tab, Tabs, ListItem, Title, Picker, Item} from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';
import CalendarPicker from 'react-native-calendar-picker';
import CalendarView from '../app/Data/CalendarView';
import DataInput from '../app/Data/DataInput';
import GraphView from '../app/Data/GraphView';
import * as fixtures from '../app/Data/WeightData';
import WeightPage from '../app/Data/WeightPage';

export default class DataScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weightData: fixtures.userData,
            selectedItem: undefined,
            selected1: '5',
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
                                            <Item label="This Week" value="5" />
                                            <Item label="Last Week" value="7" />
                                            <Item label="Last Two Weeks" value="14" />
                                            <Item label="Last Month" value="30" />
                                            <Item label="All" value="0" />
                                       </Picker>
                                            
                                        <WeightPage data={this.state.weightData} value={this.state.selected1}/>
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
