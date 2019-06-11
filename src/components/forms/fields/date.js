import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button, Icon } from '@ant-design/react-native';
import { Colors } from '@src/constants';

const DateTime = ({ label, input, format = 'DD / MM / YYYY', meta: { touched, error }, ...others }) => {
  const [visible, onChange] = useState(false);
  const hasError = touched && !!error;
  const hasLabel = !!label;

  const onClose = (value) => {
    onChange(false);
    value && input.onChange(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.left}>
          {hasLabel && <Text style={styles.label}>{label}</Text>}
          {<Text style={styles.value}>{input.value || format}</Text>}
        </View>
        <Button
          type="ghost"
          style={styles.btn}
          onPress={() => onChange(true)}
        >
          <Icon
            size="lg"
            name="calendar"
            color={hasError ? Colors.error : Colors.primary}
          />
        </Button>
      </View>
      {hasError && <Text style={styles.error}>{error}</Text>}
      <DateTimePicker
        isVisible={visible}
        {...input}
        {...others}
        onCancel={() => onClose(null)}
        onConfirm={date => onClose(moment(date).format(format))}
      />
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    flex: 1,
    paddingBottom: 8,
    fontWeight: 'bold',
    color: Colors.black,
  },
  error: {
    left: 0,
    bottom: 10,
    padding: 5,
    paddingLeft: 15,
    paddingBottom: 0,
    color: Colors.error,
    position: 'absolute',
  },
  btn: {
    padding: 0,
    borderWidth: 0,
    backgroundColor: Colors.transparent,
  }
});

DateTime.propTypes = {
  multiple: PropTypes.bool,
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  error: PropTypes.string,
  format: PropTypes.string,
};

export default DateTime;
