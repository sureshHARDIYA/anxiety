import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import _ from 'lodash';
import { Back } from '@src/components/themes';
import { Sizes, Colors } from '@src/constants';
// import Icon from 'react-native-vector-icons/FontAwesome';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Icon } from '@ant-design/react-native';
import { strings } from '@src/i18n';
import status from './data';
import Style from './style';

class Association extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <Back navigation={navigation} route="Exercise" />,
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: Colors.primary,
    },
  });

  constructor(props) {
    super(props);

    this.state = {
      items: _.shuffle(status[_.shuffle(['relationship', 'emotions'])[0]]),
    };
  }

  order = () => {
    this.setState(pre => ({ items: [...pre.items, ..._.shuffle(status[_.shuffle(['relationship', 'emotions'])[0]])] }));
  }

  renderItem = (item, index) => {
    const width = Sizes.screenWidth - 60;
    const height = Sizes.screenHeight - 100;

    return (
      <Card
        key={index}
        style={[Style.slide, { width, height }]}
      >
        <View style={Style.header}>
          <Text style={Style.title}>{item}</Text>
        </View>
        <View style={Style.footer}>
          <Text style={Style.footerTop}>{strings('exercise.howareyoufeeling')}</Text>
          <View style={Style.footerBottom}>
            <Icon
              size={30}
              name="frown"
              style={Style.icon}
              onPress={() => this.swiper.swipeLeft()}
            />
            <Icon
              size={30}
              name="meh"
              color={Colors.primary}
              style={Style.icon}
              onPress={() => this.swiper.swipeBottom()}
            />
            <Icon
              size={30}
              name="smile"
              color="green"
              style={Style.icon}
              onPress={() => this.swiper.swipeRight()}
            />
          </View>
        </View>
      </Card>
    );
  }

  render() {
    return (
      <View style={Style.container}>
        <CardStack
          disableTopSwipe
          style={Style.content}
          renderNoMoreCards={() => (
            <Icon
              size={50}
              name="reload"
              style={Style.icon}
              color={Colors.white}
              onPress={this.order}
            />
          )}
          ref={swiper => (this.swiper = swiper)}
        >
          {this.state.items.map(this.renderItem)}
        </CardStack>
      </View>
    );
  }
}

// Association.propTypes = {
//   navigation: PropTypes.object,
// };

export default Association;
