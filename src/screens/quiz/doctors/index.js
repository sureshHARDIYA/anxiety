import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Text, Image, View } from 'react-native';
import { Button, Icon } from '@ant-design/react-native';
import { strings } from '@src/i18n';
import { Colors } from '@src/constants';
import { Menu } from '@src/components/themes';
import Swiper from 'react-native-deck-swiper';
import doctors from '@src/data/doctors.json';
import Style from './style';

const QuizDoctors = () => {
  const [end, onSwiped] = useState(false);

  const renderItem = item => (
    <View
      key={item.id}
      style={Style.slide}
    >
      <View style={Style.header}>
        <View style={Style.avatarCover}>
          <Image
            style={Style.avatar}
            source={{ uri: item.avatar }}
          />
        </View>
        <Text style={Style.name}>{item.firstName} {item.lastName}</Text>
        <Text style={Style.address}>{item.address}</Text>
        <Text style={Style.phone}>{item.phone}</Text>
      </View>
      <Text style={Style.content}>{item.bio}</Text>
    </View>
  );

  return (
    <View style={Style.container}>
      {!end && (
        <Swiper
          stackSize={5}
          style={Style.swiper}
          cards={doctors}
          renderCard={renderItem}
          verticalSwipe={false}
          cardVerticalMargin={30}
          backgroundColor="transparent"
          onSwipedAll={() => onSwiped(true)}

          swipeBackCard
          animateCardOpacity
          animateOverlayLabelsOpacity
        />
      )}
      {end && (
        <View style={Style.more}>
          <Button
            type="ghost"
            style={Style.btnLoad}
            onPress={() => onSwiped(false)}
          >
            <Icon name="reload" color={Colors.white} />
          </Button>
        </View>
      )}
    </View>
  );
};

QuizDoctors.navigationOptions = ({ navigation }) => ({
  title: strings('doctors.title'),
  headerLeft: <Menu navigation={navigation} />,
});

QuizDoctors.propTypes = {
  // navigation: PropTypes.object,
};

export default QuizDoctors;
