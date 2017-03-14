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
            <Container>
                <Content />

                <Footer >
                    <FooterTab>
                        <Button
                        active={this.state.selectedTab === 'tabOne'}  
                        onPress={() => {this.setTab('tabOne'); this.navigate('Resources')}}>
                            <Icon 
                            name="bookmarks"/>      
                            <Text style={(this.state.selectedTab === 'tabOne') ? styles.pressedColor : styles.textSize}>Resources</Text>
                        </Button>
                        <Button
                        active={this.state.selectedTab === 'tabTwo'}
                        onPress={() => {this.setTab('tabTwo'); this.navigate('Journal')}}>
                            <Icon
                            name="book"/>
                            <Text style={(this.state.selectedTab === 'tabTwo') ? styles.pressedColor : styles.textSize}>Journal</Text>
                        </Button>
                        <Button
                        active={this.state.selectedTab === 'tabThree'} 
                        onPress={() => {this.setTab('tabThree'); this.navigate('Data')}}>
                            <Icon 
                            name="pulse"/>
                            <Text style={(this.state.selectedTab === 'tabThree') ? styles.pressedColor : styles.textSize}>Data</Text>
                        </Button>
                        <Button
                        active={this.state.selectedTab === 'tabFour'} 
                        onPress={() => {this.setTab('tabFour'); this.navigate('Settings')}}>
                            <Icon 
                            name="settings"/>
                            <Text style={(this.state.selectedTab === 'tabFour') ? styles.pressedColor : styles.textSize}>Settings</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  textSize: {
    fontSize: 12,
    color: '#000000',
  },
  pressedColor: {
    fontSize: 12, 
    color: '#448cff'
  }
})