import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

const Container = ({ children, type, style, ...props }) => (
  <View
    style={[Style.container, type && Style[type], style && style.length ? [...style] : style]}
    {...props}
  >
    {children}
  </View>
);

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  transparent: {
    backgroundColor: Colors.transparent,
  },
});

Container.propTypes = {
  type: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Container;
