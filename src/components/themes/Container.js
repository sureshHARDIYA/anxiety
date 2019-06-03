import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

const Container = ({ children, transparent, style, ...props }) => (
  <View
    style={[Style.container, transparent && Style.transparent, style && style.length ? [...style] : style]}
    {...props}
  >
    {children}
  </View>
);

const Style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  transparent: {
    backgroundColor: Colors.transparent,
  }
});

Container.propTypes = {
  transparent: PropTypes.bool,
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
