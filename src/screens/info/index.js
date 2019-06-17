import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { strings } from '@src/i18n';
import { Menu } from '@src/components/themes';
import Style from './style';

class Info extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: strings('tabs.info'),
    headerLeft: <Menu navigation={navigation} />
  });

  list = [
    { title: strings('info_menu.items.message'), route: 'InfoMessage' },
    { title: strings('info_menu.items.about'), route: 'InfoAbout' },
    { title: strings('info_menu.items.how_to_use'), route: 'InfoHowToUse' },
    { title: strings('info_menu.items.privacy_policy'), route: 'InfoPrivacy' },
    { title: strings('info_menu.items.credits'), route: 'InfoCredit' }
  ];

  renderItem = item => (
    <TouchableOpacity
      key={item.title}
      style={Style.item}
      onPress={() => this.props.navigation.navigate(item.route)}
    >
      <Text style={Style.txtItem}>{item.title}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <ScrollView contentContainerStyle={Style.container}>
        {this.list.map(this.renderItem)}
      </ScrollView>
    );
  }
}

Info.propTypes = {
  navigation: PropTypes.object
};

export default Info;
