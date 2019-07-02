import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@ant-design/react-native';

const Back = ({ navigation, route, params }) => (
  <Button
    type="ghost"
    style={{ borderWidth: 0 }}
    onPress={() => (route ? navigation.navigate(route, params) : navigation.goBack())}
  >
    <Icon name="chevron-left" color="#FFF" />
  </Button>
);

Back.propTypes = {
  route: PropTypes.string,
  params: PropTypes.object,
  navigation: PropTypes.object,
};

export default withNavigation(Back);
