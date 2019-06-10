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
  },
  alert: {
    padding: 20,
    textAlign: 'center',
    color: Colors.border,
  },
  btn: {
    minWidth: 250,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,

    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  btnText: {
    fontWeight: '600',
    color: Colors.active
  },
});
