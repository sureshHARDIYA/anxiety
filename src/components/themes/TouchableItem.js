import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

const TouchableItem = ({ children, right, style }) => {
  const [clicked, onClick] = useState(false);

  return (
    <TouchableOpacity
      type="ghost"
      style={style}
      onPress={() => onClick(!clicked)}
    >
      <View style={{ flex: 1 }}>
        {children}
      </View>
      {clicked && <View>{right}</View>}
    </TouchableOpacity>
  );
};

TouchableItem.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  right: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.array]),
};

export default TouchableItem;
