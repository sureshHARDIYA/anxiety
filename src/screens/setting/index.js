import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, ScrollView } from 'react-native';
import { Menu } from '@src/components/themes';
import { strings } from '@src/i18n';
import Style from './style';

class Setting extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: strings('menu.settings'),
    headerLeft: <Menu navigation={navigation} />,
  });

  render() {
    return (
      <ScrollView contentContainerStyle={Style.container}>
        <Text>updating...</Text>
      </ScrollView>
    );
  }
}

// Setting.propTypes = {
//   navigation: PropTypes.object,
// };

export default Setting;
