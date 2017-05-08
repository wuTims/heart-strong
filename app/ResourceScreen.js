import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, ScrollView} from 'react-native';
import { Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import HeaderComponent from '../app/HeaderComponent';

export default class ResourceScreen extends Component {
  
    navigate(routeName) {
        this.props.navigator.push({
            name: routeName
        })
    }
    
    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderComponent titleText='Resource' navigator={this.props.navigator} />
                <Container>
                  <Content>
                        <ScrollView style={styles.scrollView}>
                             <Text style={styles.alertStyle } onPress={() => {this.navigate('R1')}}> Week One: Survival Skills</Text>
                              <Text style={styles.alertStyle } onPress={() => {this.navigate('R2')}}> Week Two: Norishing the Body</Text>
                             <Text style={styles.alertStyle } onPress={() => {this.navigate('R3')}}> Week Three: Rehabilitation</Text>
                            <Text style={styles.alertStyle } onPress={() => {this.navigate('R4')}}> Week Four: Ready for Self-care</Text>
                            <Text style={styles.alertStyle } onPress={() => {this.navigate('FAQ')}}> FAQs</Text>
                        
         
                        </ScrollView>
                        
                    </Content>
                </Container>
                     
                <FooterComponent activeTab='tabTwo' navigator={this.props.navigator}/>

            </View>  

        );
    }
}


const styles = StyleSheet.create({
 
  testStyle: {
    textAlign: 'center',
  },
  alertStyle: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 2,
  },
    scrollView: {
    marginTop: 0,
    backgroundColor: 'white',
    opacity: 0.75,
  },
})