import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderTopWidth: 0,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    borderBottomColor: Colors.inactive,
  },
  title: {
    flex: 1,
    padding: 5,
  },
  date: {
    padding: 5,
    width: 100,
    textAlign: 'center'
  }
});
