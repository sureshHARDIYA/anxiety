import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { strings } from '@src/i18n';
import { Menu } from '@src/components/themes';
import Style from './style';

class Info extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: strings('tabs.info'),
    headerLeft: <Menu navigation={navigation} />,
  });


  list = [
    { title: 'Message from the developer', route: 'InfoMessage' },
    { title: 'About the app', route: 'InfoAbout' },
    { title: 'How to use this app?', route: 'InfoHowToUse' },
    { title: 'Privacy Policy', route: 'InfoPrivacy' },
    { title: 'App Credits', route: 'InfoCredit' },
    { title: 'Depression sources', route: 'InfoSource' }
  ];

  renderItem = item => (
    <TouchableOpacity
      key={item.title}
      style={Style.item}
      onPress={() => this.props.navigation.navigate(item.route)}
    >
      <Text style={Style.txtItem}>{item.title}</Text>
    </TouchableOpacity>
  )

  render() {
    return (
      <ScrollView contentContainerStyle={Style.container}>
        {this.list.map(this.renderItem)}
      </ScrollView>
    );
  }
}

Info.propTypes = {
  navigation: PropTypes.object,
};

export default Info;
