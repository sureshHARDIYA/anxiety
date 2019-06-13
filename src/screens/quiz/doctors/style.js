import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  swiper: {
    borderColor: Colors.primary,
  },
  slide: {
    flex: 1,
    borderWidth: 1,
    marginBottom: 50,
    borderRadius: 10,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  more: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLoad: {
    width: 55,
    height: 55,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.white,
  },
  avatarCover: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 100,

    borderWidth: 5,
    borderColor: Colors.border,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90,
  },
  header: {
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',

    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  name: {
    padding: 10,
    color: Colors.secondary,
    fontSize: Sizes.huge,
  },
  address: {
    color: Colors.gray,
    fontSize: Sizes.medium,
  },
  phone: {
    padding: 10,
    fontSize: Sizes.large,
    color: Colors.primary,
  },
  content: {
    padding: 20,
    color: Colors.black,
  }
});
