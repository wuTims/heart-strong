import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterComponent extends Component {
    constructor() {
      super();
      this.state = {selectedTab: 'tabOne'}
    }
    setTab(tabID) {
      this.setState({selectedTab: tabID})
    }
    render() {
        return (
            <Container>
                <Content />

                <Footer >
                    <FooterTab>
                        <Button
                        active={this.state.selectedTab === 'tabOne'}  
                        onPress={() => this.setTab('tabOne')}>
                            <Icon 
                            name="bookmarks"/>      
                            <Text>Guide</Text>
                        </Button>
                        <Button
                        active={this.state.selectedTab === 'tabTwo'}
                        onPress={() => this.setTab('tabTwo')}>
                            <Icon
                            name="brush"/>
                            <Text>Journal</Text>
                        </Button>
                        <Button
                        active={this.state.selectedTab === 'tabThree'} 
                        onPress={() => this.setTab('tabThree')}>
                            <Icon 
                            name="pulse"/>
                            <Text>Data</Text>
                        </Button>
                        <Button
                        active={this.state.selectedTab === 'tabFour'} 
                        onPress={() => this.setTab('tabFour')}>
                            <Icon 
                            name="settings"/>
                            <Text>Settings</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}