import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '@src/constants';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.white
  },
  mainContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10
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
  whiteText: {
    color: Colors.black,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  icon: {
    color: Colors.primary,
    marginTop: 6,
    marginRight: 10
  }
});
