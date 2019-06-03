import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '@src/components/themes';
import { strings } from '@src/i18n';

class Info extends Component {
  static navigationOptions = {
    title: strings('tabs.info'),
  };

  render() {
    return (
      <Container transparent>
        <Text>Info Screen</Text>
      </Container>
    );
  }
}

export default Info;
