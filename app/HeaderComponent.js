import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';

/**
* Component that renders header navigation for Home, Settings, and back navigation.
* 
*/
export default class HeaderComponent extends Component {
    /**
    * Initialize state fields.
    */
	constructor() {
		super();
		this.state = {
			homePressed: '',
            settingsPressed: ''
		}
	}

    /**
    * Reverse setting icon active state
    */
    settingsPressed() {
        if (this.state.settingsPressed == 'true') {
            this.setState({settingsPressed: ''})
        } else {
            this.setState({settingsPressed: 'true'})
        }
    }

    /**
    * Navigate to previous screen.
    * param {navigator} navigator - Navigator from props that holds stack of screens.
    */
    backPressed() {
        if(this.props.titleText == 'Home Screen') {
        {/* Does nothing when on Home screen for now because I 
            didn't want it to go back to the login screen. Will 
            think of a way to fix later*/}
        } else {
            this.props.navigator.pop();
        }
    }

	navigate(routeName) {
		this.props.navigator.push({
			name: routeName
		})
	}

    render() {
        return (
                <Header>
                    <Left>
                        {/*<Button 
                        transparent
                        onPress={ () => {this.homePressed(); this.navigate('Home')}}>
                            <Icon name='home' 
                            active={(this.props.active !== '') ? this.props.active : this.state.homePressed}
                            />
                        </Button>
                        */}
                    <Button transparent
                    onPress={() => {this.backPressed()}}>
                        <Icon name='arrow-back'/>
                    </Button>
                    </Left>
                    <Body>
                        {/* <Button 
                        transparent
                        onPress={ () => {this.homePressed(); this.navigate('Home')}}>
                        	<Icon 
                        	name='heart' 
                            active={(this.props.active !== '') ? this.props.active : this.state.homePressed}
                        	/>
                        </Button>
                        */}
                        <Title>{this.props.titleText}</Title>
                    </Body>
                    <Right>
                        <Button transparent
                        onPress={() => {this.settingsPressed(); this.navigate('Settings')}}>
                            <Icon name='settings' 
                            active={(this.props.settings !== '') ? this.props.settings : this.state.settingsPressed} 
                            />
                        </Button>
                    </Right>
                </Header>
        );
    }
}