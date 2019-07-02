import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.primary,
  },
  alert: {
    padding: 20,
    textAlign: 'center',
    color: Colors.border,
  },
  item: {
    textTransform: 'capitalize',
  }
});
