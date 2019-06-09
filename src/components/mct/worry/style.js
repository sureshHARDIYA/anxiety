import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '@src/constants';

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
    padding: 10,
    paddingRight: 0,
    borderTopWidth: 0,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border,
  },
  itemLeft: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.border,
  },
  leftActive: {
    borderColor: Colors.active,
  },
  itemActive: {
    // borderBottomColor: Colors.active,
  },
  itemContent: {
    flex: 1,
    padding: 5,
    paddingLeft: 20,
  },
  text: {
    flex: 1,
    fontWeight: '600',
    fontSize: Sizes.medium,
  },
  date: {
    fontSize: 12,
    marginTop: -2,
    lineHeight: 20,
    textAlign: 'center',
    color: Colors.inactive,
  },
  active: {
    color: Colors.active,
  },
  itemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemFooterText: {
    fontSize: 12,
    alignItems: 'center',
  },
  itemRight: {
  },
  iconStyle: {
    marginTop: 5,
    padding: 3,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.border,
  }
});
