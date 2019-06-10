import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '@src/constants';

export default StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.border,

    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    height: 400,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    bottom: 0,
    padding: 10,
    fontWeight: '600',
    color: Colors.black,
    fontSize: Sizes.medium,
  },
  caption: {
    padding: 10,
    color: Colors.gray,
  },
  btn: {
    marginLeft: 10,
    marginRight: 10,
  },
  btnIcon: {
    color: 'red',
  }
});
