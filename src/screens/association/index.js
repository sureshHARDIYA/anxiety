import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Back } from '@src/components/themes';
import Carousel from 'react-native-snap-carousel';
import { Sizes } from '@src/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import items from './data';
import Style from './style';

class Association extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerLeft: <Back navigation={navigation} />,
  });

  state = {
    favorites: items.reduce((obj, item) => ({ ...obj, [item.id]: item.favorite === 2 }), {}),
  }

  renderItem = ({ item }) => {
    const { favorites } = this.state;

    return (
      <View
        key={item.id}
        style={Style.slide}
      >
        <Image
          style={Style.image}
          source={{ uri: item.image }}
        />
        <View style={Style.header}>
          <Text style={Style.title}>{item.title}</Text>
          <TouchableOpacity
            style={Style.btn}
            onPress={() => this.setState({ favorites: { ...favorites, [item.id]: !item.love } })}
          >
            <Icon name={{ false: 'heart', true: 'heart-o' }[`${item.love}`]} style={Style.btnIcon} size={30} />
          </TouchableOpacity>
        </View>
        <Text style={Style.caption}>{item.description}</Text>
      </View>
    );
  }

  render() {
    const { favorites } = this.state;
    const sliderWidth = Sizes.screenWidth - 30;
    const itemWidth = sliderWidth - 50;

    return (
      <ScrollView contentContainerStyle={Style.container}>
        <Carousel
          itemWidth={itemWidth}
          sliderWidth={sliderWidth}
          renderItem={this.renderItem}
          containerCustomStyle={Style.content}
          data={items.map(item => ({ ...item, love: favorites[item.id] }))}
        />
      </ScrollView>
    );
  }
}

// Association.propTypes = {
//   navigation: PropTypes.object,
// };

export default Association;
