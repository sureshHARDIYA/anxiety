import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Style from './style';
import items from './data';

const colors = [['#a2a2a2', '#0097e7'], ['#0097e7', '#a2a2a2']];

const MCTAssociation = ({ navigation }) => (
  <ScrollView contentContainerStyle={Style.content}>
    {items.map((item, index) => (
      <TouchableOpacity
        key={item.id}
        style={[Style.item, Style.shadow]}
        onPress={() => navigation.navigate('Association', { item, title: item.name })}
      >
        <LinearGradient
          key={item.id}
          end={{ x: 0.5, y: 1.0 }}
          start={{ x: 0.0, y: 0.5 }}
          style={[Style.itemContent]}
          colors={colors[index % 2]}
        >
          <Text style={Style.itemTitle}>{item.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

MCTAssociation.propTypes = {
  navigation: PropTypes.object,
};

export default withNavigation(MCTAssociation);
