import React, { Component } from 'react';
import HeaderComponent from '../../app/HeaderComponent';
import FooterComponent from '../../app/FooterComponent';
import * as firebase from 'firebase';
import { View, AppRegistry, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { Container, Content, Icon, Left, Right, Body, Header, Title, ListItem  } from 'native-base';


/** Component that handles user input from the Journal Page.*/
export default class JournalInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this._addEntry = this._addEntry.bind(this);
    this.journalRef = this.getRef().child('journals');
  }

  /** 
  * Returns the configured Firebase reference.
  * @returns {Firebase} The Firebase reference.
  */
  getRef() {
    return firebase.database().ref();
  }

  navigate(routeName) {
      this.props.navigator.push({
          name: routeName
      })
  }

  /**
  * Adds current text to list of entries.
  * @params {Date} date_of_entry - Current date/time of entry.
  * @params {String} entry - Current text in the TextInput field.
  */
  _addEntry() {
    this.journalRef.push({
      date_of_entry: new Date().toLocaleString(),
      entry: this.state.text
    });
  }

  render(){
      return (
         <View style={styles.container}>
            <Container>
              <HeaderComponent titleText='New Journal' navigator={this.props.navigator} />
                <Content>
                  <TextInput
                  placeholder="What are you grateful for?"
                  onChangeText={(text) => this.setState({text})}
                  style={styles.input}
                  value={this.state.text}
                  multiline={true}
                  />

                  <TouchableOpacity style={styles.actionButtonIcon} onPress= {() => {this.navigate('Journal'); this._addEntry()}}>
                        <Text style={styles.button}>Add</Text>
                  </TouchableOpacity>
                </Content>
            </Container>
            <FooterComponent activeTab='tabFour' navigator={this.props.navigator}/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  input: {
    backgroundColor: '#fffded',
    padding: 10,
    borderRadius: 3,
    borderColor: 'black',
    borderWidth: 1,
    height: 400, 
    margin: 20,
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1
  },
  actionButtonIcon: {
    margin: 20,
    backgroundColor: '#4286f4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  button: {
    color: '#FFF'
  }
})
