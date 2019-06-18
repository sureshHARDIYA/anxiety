import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    paddingBottom: 20,
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
  },
  group: {
    backgroundColor: 'rgba(52,52,52, 0.2)',
  },
  hasError: {
    borderColor: Colors.error,
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
