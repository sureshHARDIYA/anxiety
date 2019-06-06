import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { Button } from '@ant-design/react-native';
import { strings } from '@src/i18n';
import Style from './style';

class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView contentContainerStyle={Style.container}>
        <Image
          style={Style.icon}
          source={require('@src/assets/images/icons/tasklist.png')}
        />
        <View style={Style.caption}>
          <Text style={Style.title}>{strings('home.title')}</Text>
          <Text style={Style.captionText}>{strings('home.caption')}</Text>
        </View>
        <Button
          type="ghost"
          style={Style.btn}
          onPress={() => {}}
        >
          <Text style={Style.btnText}>
            {strings('home.btn')}
          </Text>
        </Button>
      </ScrollView>
    );
  }
}

export default Home;
