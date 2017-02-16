import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class FooterTabsExample extends Component {
    render() {
        return (
            <Container>
                <Content />

                <Footer >
                    <FooterTab>
                        <Button>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button active>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}