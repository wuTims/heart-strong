import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class HeaderComponent extends Component {
	constructor() {
		super();
		this.state = {
			homePressed: ''
		}
	}

	homePressed() {
		if (this.state.homePressed == 'true') {
			this.setState({homePressed: ''})
		} else {
			this.setState({homePressed: 'true'})
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
                        <Button transparent>
                            <Icon name='list' />
                        </Button>
                    </Left>
                    <Body>
                        <Button 
                        transparent
                        onPress={ () => {this.homePressed(); this.navigate.bind(this, 'Home')}}>
                        	<Icon 
                        	name='heart' 
                        	active={(this.props.active !== '') ? this.props.active : this.state.homePressed}/>
                        </Button>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='person' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}