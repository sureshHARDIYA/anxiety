import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  btnFloat: {
    width: 40,
    height: 40,
    left: 10,
    bottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
    borderRadius: 40,
    position: 'absolute',
    backgroundColor: Colors.primary,
  },
  item: {
    borderTopWidth: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.inactive,
  },
  itemActive: {
    // borderBottomColor: Colors.active,
  },
  itemContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: Colors.inactive,
  },
  active: {
    color: Colors.active,
  },
});
