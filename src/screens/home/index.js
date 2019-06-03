import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '@src/components/themes';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container>
        <Text>Home Screen</Text>
      </Container>
    );
  }
}

export default Home;
