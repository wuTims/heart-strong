import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import WeightGraph from './WeightGraph';

export default class WeightPage extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const {
      data: graphData,
      value: value,
    } = this.props;

    const graphProps = {};
    graphProps.data = graphData.weight;
    graphProps.value = value;
    graphProps.xAccessor = d => new Date(d.time * 1000); //time in milliseconds since 1/11970
    graphProps.yAccessor = d => d.weightMax;

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <WeightGraph {...graphProps} />
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
