import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from '@ant-design/react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

const RadioInput = ({ label, options = [], input, meta: { touched, error } }) => {
  const hasError = touched && !!error;
  const hasLabel = !!label;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {hasLabel && <Text style={styles.label}>{label}</Text>}
        <View style={styles.options}>
          {options.map(item => (
            <Radio.RadioItem
              key={item.value}
              checked={input.value === item.value}
              style={{ borderBottomWidth: 1, borderColor: '#999', padding: 0 }}
              onChange={event => event.target.checked && input.onChange(item.value)}
            >
              {item.label}
            </Radio.RadioItem>
          ))}
        </View>
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
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    color: Colors.black,
  },
  row: {
    flexDirection: 'row',
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

RadioInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default RadioInput;
