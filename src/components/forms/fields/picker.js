import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Colors } from '@src/constants';

const RadioInput = ({ label, options = [], defaultValue, input, meta: { touched, error }, ...others }) => {
  const hasError = touched && !!error;
  const hasLabel = !!label;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {hasLabel && <View style={{ backgroundColor: 'rgba(52,52,52, 0.2)' }}><Text style={styles.label}>{label}</Text></View>}
        <View style={styles.options}>
          <View style={styles.left}>
            <Text>{label}</Text>
          </View>
          <View style={styles.right}>
            <RNPickerSelect
              {...input}
              {...others}
              placeholder={{}}
              items={options}
              value={input.value}
              style={{
                inputIOS: {
                  textAlign: 'right',
                },
                inputAndroid: {
                  textAlign: 'right',
                }
              }}
              onValueChange={value => input.onChange(value || defaultValue)}
            />
          </View>
        </View>
      </View>
      {hasError && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  hasError: {
    borderColor: Colors.error,
  },
  content: {
  },
  options: {
    flexDirection: 'row'
  },
  left: {
    flex: 1,
    padding: 15,
  },
  right: {
    padding: 15,
    minWidth: 120,
  },
  label: {
    flex: 1,
    padding: 10,
    width: '100%',
    paddingLeft: 15,
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
  defaultValue: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default RadioInput;
