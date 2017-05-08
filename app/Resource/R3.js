import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View,alertrt, Linking,  Image} from 'react-native';
import {Container, Content, Input, Icon, Button, Left, Right, Body, Header, Title, ListItem} from 'native-base';

/**
* Component that renders links to resources for Week 3.
*/
export default class R3 extends Component {

  navigate(routeName) {
      this.props.navigator.push({
          name: routeName
      })
  }

  render(){
      return (
         <Container>

                 <Header>
                     <Left>
                        <Button transparent   onPress={() => {this.navigate('Resources')}} >
                            <Icon name='ios-arrow-round-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Resources </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>

              
                  <View style={{flex:1, flexDirection: 'column'}}>
                  
                    
                 
                  
                    <View style={styles.container}> 
                        <Text style={{fontSize : 30}}> Rehabilitation </Text> 
                        <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('http://www.heart.org/HEARTORG/Conditions/More/ConsumerHealthCare/Medication-Adherence---Taking-Your-Meds-as-Directed_UCM_453329_Article.jsp#.WN0K2dIrKUk')}>
                          Medication Adherence I
                        </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://medadherenceresources.com/')}>
                        Medication Adherence II
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.webmd.com/heart-disease/heart-failure/watching-your-fluid-intake-when-you-have-heart-failure')}>
                        Weight and Intake and Output I
                      </Text>

                        <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('http://my.clevelandclinic.org/health/articles/monitoring-weight-fluid-intake')}>
                          Weight and Intake and Output II 
                        </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://www.heart.org/idc/groups/heart-public/@wcm/@hcm/@gwtg/documents/downloadable/ucm_309068.pdfanagement')}>
                        Diet Management
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.livestrong.com/article/428352-sample-diet-for-congestive-heart-failure/')}>
                        Sample diets
                      </Text>

                       <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('https://maryrodavichwvudietetics.wordpress.com/tag/chf-meal-plan/')}>
                          Meal Plan I
                        </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.upmc.com/patients-visitors/education/cardiology/Pages/heart-failure-nutrition.aspx')}>
                        Meal Plan II 
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.heart.org/HEARTORG/Conditions/HeartFailure/PreventionTreatmentofHeartFailure/Lifestyle-Changes-for-Heart-Failure_UCM_306341_Article.jsp#.WN0TyNIrKUk')}>
                        Exercise
                      </Text>

                        <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('https://www.health.qld.gov.au/__data/assets/pdf_file/0021/431328/guide_exercise_chf.pdf')}>
                         Exercise Guidelines in CHF I
                        </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.chfpatients.com/faq/exercises/exercises.htm')}>
                        Exercise Guidelines in CHF II
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://www.heart.org/HEARTORG/Conditions/More/CardiacRehab/Coping-with-Feelings_UCM_307092_Article.jsp#.WN1UHtIrKUk')}>
                        Coping with Feelings I
                      </Text>

                       <Text style={{color: 'blue'}}
                           onPress={() => Linking.openURL('http://www.apa.org/helpcenter/heart-disease.aspx')}>
                          Coping with Feelings II
                        </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.bliss.phonegap&hl=en')}>
                        Gratitude Journaling I
                      </Text>

                      <Text style={{color: 'blue'}}
                       onPress={() => Linking.openURL('http://appcrawlr.com/ios/happier')}>
                        Gratitude Journaling II
                      </Text>

                      <Text>
                      ...
                      </Text>

                       <Text > 
                        Keep adding more when client when clients require
                      </Text>
                      </View>

                      
                  </View>
                </Content>

            </Container>
      );
    }

}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center', 
    alignItems: 'center',
  
  }, 

  image: {
    flex: 1,
    width: 320, 
    height: 360
  },
    
})
