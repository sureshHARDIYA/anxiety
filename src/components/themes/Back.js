import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Icon, Button } from '@ant-design/react-native';

const Back = ({ navigation }) => (
  <Button
    type="ghost"
    style={{ borderWidth: 0 }}
    onPress={() => navigation.goBack()}
  >
    <Icon name="left" color="#FFF" />
  </Button>
);

Back.propTypes = {
  navigation: PropTypes.object,
};

export default withNavigation(Back);
