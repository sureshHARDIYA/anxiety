import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

const SwitchInput = ({ label, input, meta: { touched, error }, ...others }) => {
  const hasError = touched && !!error;
  const hasLabel = !!label;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {hasLabel && <Text style={styles.label}>{label}</Text>}
        <Switch
          {...others}
          {...input}
          onValueChange={value => input.onChange(value)}
        />
      </View>
      {hasError && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    position: 'relative',
  },
  hasError: {
    borderColor: Colors.error,
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    flex: 1,
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
});

SwitchInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  error: PropTypes.string,
};

export default SwitchInput;
