import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, ScrollView} from 'react-native';

import FooterComponent from '../app/FooterComponent'; 
import HeaderComponent from '../app/HeaderComponent';
import { Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem  } from 'native-base';

export default class CurriculumScreen extends Component {

      navigate(routeName) {
        this.props.navigator.push({
            name: routeName
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderComponent titleText='Curriculum' navigator={this.props.navigator} />

              <Container>
                    <Content>
                        <ScrollView style={styles.scrollView}>

                             <Text style={styles.alertStyle } onPress={() => {this.navigate('Week0Content')}}> Introduce to Heartstrong Care</Text>
                             <Text style={styles.alertStyle } onPress={() => {this.navigate('Week1Content')}}> Week One: Survival Skills</Text>
                              <Text style={styles.alertStyle } onPress={() => {this.navigate('Week2Content')}}> Week Two: Norishing the Body</Text>
                             <Text style={styles.alertStyle } onPress={() => {this.navigate('Week3Content')}}> Week Three: Rehabilitation</Text>
                            <Text style={styles.alertStyle } onPress={() => {this.navigate('Week4Content')}}> Week Four: Ready for Self-care</Text>
                        
         
                        </ScrollView>
                        
                    </Content>
                </Container>
                




                <FooterComponent activeTab='tabOne' navigator={this.props.navigator}/>
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