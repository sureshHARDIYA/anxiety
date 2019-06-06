import React from 'react';
// import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';
import Style from './style';
import items from './data';

const MCTAssociation = () => (
  <ScrollView contentContainerStyle={Style.content}>
    {items.map(item => (
      <TouchableOpacity
        key={item.id}
        style={Style.item}
        // onPress={() => navigation.navigate('Association', { id: item.id })}
      >
        <View style={Style.itemContent}>
          <Image style={Style.itemThumb} source={{ uri: item.image }} />
          <Text style={Style.itemTitle}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

// MCTAssociation.propTypes = {
//   navigation: PropTypes.object,
// };

export default MCTAssociation;
