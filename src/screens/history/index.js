import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '@src/components/themes';
import { strings } from '@src/i18n';

class History extends Component {
  static navigationOptions = {
    title: strings('tabs.history'),
  };

  render() {
    return (
      <Container transparent>
        <Text>History Screen</Text>
      </Container>
    );
  }
}

export default History;
