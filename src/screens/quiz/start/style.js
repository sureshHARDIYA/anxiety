import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  btn: {
    marginTop: 30,
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
  caption: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.white,
  },
  captionText: {
    maxWidth: 320,
    color: Colors.white,
    textAlign: 'center',
  },
  btnText: {
    fontWeight: '600',
    color: Colors.active
  },
  icon: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  }
});
