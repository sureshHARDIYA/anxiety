import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  swipeout: {
    borderTopWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.inactive,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    padding: 5,
  },
  date: {
    padding: 5,
    width: 90,
    textAlign: 'right'
  },
  score: {
    padding: 5,
  }
});
