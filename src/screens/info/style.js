import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.border,
  },
  txtItem: {
    fontWeight: '500',
    color: Colors.black,
  }
});
