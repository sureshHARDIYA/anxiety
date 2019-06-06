import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    padding: 10,
    width: '50%',
  },
  itemContent: {
    borderWidth: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.inactive,
  },
  itemTitle: {
    bottom: 0,
    padding: 5,
    width: '100%',
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
    position: 'absolute',
  },
  itemThumb: {
    width: '100%',
    height: 200,
  }
});
