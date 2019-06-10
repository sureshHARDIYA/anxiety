import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  content: {
    padding: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  item: {
    padding: 10,
    width: '50%',
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemContent: {
    flex: 1,
    padding: 5,
    minHeight: 80,
    borderRadius: 5,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    padding: 5,
    width: '100%',
    fontWeight: '600',
    color: Colors.white,
    textAlign: 'center',
  },
  itemThumb: {
    width: '100%',
    height: 200,
  },
});
