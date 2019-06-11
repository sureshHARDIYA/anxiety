import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  submit: {
    height: 42,
    margin: 15,
    marginTop: 40,
    borderRadius: 0,
    backgroundColor: Colors.primary,
  },
  submitText: {
    fontSize: 15,
    color: Colors.white,
  }
});
