import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '@src/constants';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.white
  },
  title: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: Colors.border
  },
  titleText: {
    fontWeight: '500',
    color: Colors.primary,
    fontSize: Sizes.medium
  },
  paragraph: {
    paddingVertical: 8
  },
});
