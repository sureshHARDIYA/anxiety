import React, { Component } from 'react';
import { View } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import { Container } from '@src/components/themes';
import { Colors } from '@src/constants';
import { strings } from '@src/i18n';
import Worry from '@src/components/mct/worry';
import Association from '@src/components/mct/association';
import Style from './style';

class MCT extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const tabs = [
      { title: strings('mct.worry') },
      { title: strings('mct.association') },
    ];

    return (
      <Container
        transparent
        style={Style.container}
      >
        <View style={Style.bar} />
        <Tabs
          tabs={tabs}
          tabBarBackgroundColor={Colors.primary}
          tabBarUnderlineStyle={{
            backgroundColor: Colors.white,
          }}
          tabBarTextStyle={{
            fontWeight: '600'
          }}
          tabBarActiveTextColor={Colors.white}
        >
          <Worry />
          <Association />
        </Tabs>
      </Container>
    );
  }
}

export default MCT;
