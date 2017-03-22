import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class HeaderComponent extends Component {
	constructor() {
		super();
		this.state = {
			homePressed: '',
            settingsPressed: ''
		}
	}

	homePressed() {
		if (this.state.homePressed == 'true') {
			this.setState({homePressed: ''})
		} else {
			this.setState({homePressed: 'true'})
		}
	}

    settingsPressed() {
        if (this.state.settingsPressed == 'true') {
            this.setState({settingsPressed: ''})
        } else {
            this.setState({settingsPressed: 'true'})
        }
    }

	navigate(routeName) {
		this.props.navigator.push({
			name: routeName
		})
	}

    render() {
        return (
            <Container>
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
                        <Text>{this.props.titleText}</Text>
                    </Body>
                    <Right>
                        <Button 
                        transparent
                        onPress={() => {this.settingsPressed(); this.navigate('Settings')}}>
                            <Icon name='settings' 
                            active={(this.props.settings !== '') ? this.props.settings : this.state.settingsPressed} 
                            />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}