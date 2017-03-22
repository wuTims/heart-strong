import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, Dimensions, TextInput, Button} from 'react-native';
import { Header, Container, Content, Tab, Tabs, ListItem } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';
import CalendarPicker from 'react-native-calendar-picker';
import CalendarView from '../app/data/CalendarView';
import DataInput from '../app/data/DataInput';
import GraphView from '../app/data/GraphView';

export default class DataScreen extends Component {
    navigate(routeName) {
      this.props.navigator.push({
          name: routeName
      })
  }

    render() {
        return (
            <Container>
                <HeaderComponent active={false}/>
                <Content>
                        <View style={{flex: 1}}>
                                <Tabs>
                                    <Tab heading="Calendar">
                                        <CalendarView navigator={this.props.navigator}/>
                                    </Tab>
                                    <Tab heading="Graph">
                                        <GraphView />
                                    </Tab>
                                </Tabs>
                                <Content>
                                </Content>
                        </View>
                </Content>
                <FooterComponent navigator={this.props.navigator}/>
            </Container>

        );
    }
}

