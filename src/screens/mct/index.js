import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '@src/components/themes';
import { strings } from '@src/i18n';

class MCT extends Component {
  static navigationOptions = {
    title: strings('tabs.mct'),
  };

  render() {
    return (
      <Container transparent>
        <Text>MCT Screen</Text>
      </Container>
    );
  }
}

export default MCT;
