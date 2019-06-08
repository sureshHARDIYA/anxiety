import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container } from '@src/components/themes';
import { strings } from '@src/i18n';
import { LineChart } from 'react-native-chart-kit';

class History extends Component {
  static navigationOptions = {
    title: strings('tabs.history'),
  };

  render() {
    const chartConfig = {
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#ffffff',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 1, // optional, default 3
    };

    const data = {
      labels: ['1', '2', '3', '4'],
      datasets: [{
        data: [
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21,
          Math.random() * 21
        ]
      }]
    };

    return (
      <Container transparent>
        <LineChart
          bezier
          data={data}
          height={220}
          chartConfig={chartConfig}
          width={Dimensions.get('window').width}
        />
      </Container>
    );
  }
}

export default History;
