import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon} from 'native-base';
import { AppRegistry, Text, StyleSheet} from 'react-native';


export default class FooterComponent extends Component {
    constructor() {
      super();
      this.state = {
        selectedTab: ''
        }
    }
    setTab(tabID) {
      this.setState({selectedTab: tabID})
    }

    navigate(routeName) {
        this.props.navigator.push({
            name: routeName
        })
    }

    render() {
        return (
                <Footer >
                    <FooterTab>
                        <Button
                        active={this.props.activeTab === 'tabOne'}
                        onPress={() => {this.setTab('tabOne'); this.navigate('Curriculum')}}>
                            <Icon
                            name="bookmarks"/>
                            <Text style={(this.props.activeTab === 'tabOne') ? styles.pressedColor : styles.textSize}>Curriculum</Text>
                        </Button>
                        <Button
                        active={this.props.activeTab === 'tabTwo'}  
                        onPress={() => {this.setTab('tabTwo'); this.navigate('Resources')}}>
                            <Icon 
                            name="ios-folder-outline"/>      
                            <Text style={(this.props.activeTab === 'tabTwo') ? styles.pressedColor : styles.textSize}>Resources</Text>
                        </Button>
                        <Button
                        active={this.props.activeTab === 'tabThree'}
                        onPress={() => {this.setTab('tabThree'); this.navigate('Home')}}>
                            <Icon
                            name="home"/>
                            <Text style={(this.props.activeTab === 'tabThree') ? styles.pressedColor : styles.textSize}>Home</Text>
                        </Button>
                        <Button
                        active={this.props.activeTab === 'tabFour'} 
                        onPress={() => {this.setTab('tabFour'); this.navigate('Journal')}}>
                            <Icon 
                            name="book"/>
                            <Text style={(this.props.activeTab === 'tabFour') ? styles.pressedColor : styles.textSize}>Journal</Text>
                        </Button>
                        <Button
                        active={this.props.activeTab === 'tabFive'} 
                        onPress={() => {this.setTab('tabFive'); this.navigate('Data')}}>
                            <Icon 
                            name="pulse"/>
                            <Text style={(this.props.activeTab === 'tabFive') ? styles.pressedColor : styles.textSize}>Data</Text>
                        </Button>                        
                    </FooterTab>
                </Footer>
        );
    }
}

const styles = StyleSheet.create({
  textSize: {
    fontSize: 7.5,
    color: '#000000',
  },
  pressedColor: {
    fontSize: 7.5, 
    color: '#448cff'
  }
})