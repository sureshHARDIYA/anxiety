import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { InputItem, TextareaItem } from '@ant-design/react-native';
import { Colors } from '@src/constants';

const Input = ({ label, multiple, input, meta: { touched, error }, ...others }) => {
  const hasError = touched && !!error;
  const hasLabel = !!label;
  const Component = multiple ? TextareaItem : InputItem;

  return (
    <View style={styles.container}>
      {hasLabel && <Text style={styles.label}>{label}</Text>}
      <Component
        style={[styles.input, multiple && styles.area, hasError && styles.hasError]}
        {...input}
        {...others}
        last
      />
      {hasError && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 20,
    position: 'relative',
  },
  hasError: {
    borderColor: Colors.error,
  },
  label: {
    paddingLeft: 15,
    paddingBottom: 8,
    color: Colors.inactive,
  },
  error: {
    left: 0,
    bottom: 0,
    padding: 5,
    paddingLeft: 15,
    paddingBottom: 0,
    color: Colors.error,
    position: 'absolute',
  },
  input: {
    padding: 10,
    minHeight: 42,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: Colors.border,
  },
  area: {
    marginLeft: 15,
    marginRight: 15,
  }
});

Input.propTypes = {
  multiple: PropTypes.bool,
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
