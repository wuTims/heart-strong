import React, { Component } from 'react';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';

export default class MedicineList extends Component {
	render() {
		return (
      		<View style={{flex: 1}}>
				<HeaderComponent navigator={this.props.navigator} active=''/>
				<Content>
					 <ListItem selected={false}>
                        <Text>Lunch Break</Text>
                        <Right>
                          <Radio selected={false} />
                        </Right>
                    </ListItem>
                    <ListItem selected={true}>
                        <Text>Discussion with Client</Text>
                        <Right>
                            <Radio selected={true} />
                        </Right>
                    </ListItem>
				</Content>
				<FooterComponent activeTab='tabFour' navigator={this.props.navigator}/>
			</View>
		);
	}
}