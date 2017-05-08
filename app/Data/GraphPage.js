import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DataGraph from './DataGraph';

/**
* Component to display graph visualization of data.
* Template and code example borrowed from: https://github.com/hswolff/BetterWeather
*/
export default class GraphPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const {
      data: graphData,
      value: value,
      type: type,
    } = this.props;

    const graphProps = {};
    // graphProps.data = graphData;
    if(type == 'weight'){
      graphProps.data = graphData.weight;
    } else if (type == 'bloodpressure'){
      graphProps.data = graphData.heartRate;
    } else{
      graphProps.data = graphData.bloodPressure;
    }
    graphProps.value = value;
    graphProps.xAccessor = d => new Date(d.date_of_entry); 
    graphProps.yAccessor = d => d.value;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <DataGraph {...graphProps} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f1fd',
    borderColor: '#000000'
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
