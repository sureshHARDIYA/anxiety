import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  btnGroups: {
    flexDirection: 'row',
  },
  btn: {
    marginTop: 30,
    minWidth: 250,
    marginBottom: 10,
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
  btnFlat: {
    borderWidth: 0,
  },
  caption: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    minWidth: '100%',
    fontWeight: '600',
    marginBottom: 30,
    color: Colors.white,
    fontSize: Sizes.large,
  },
  captionText: {
    color: Colors.white,
  },
  btnText: {
    fontWeight: '600',
    color: Colors.active,
  },
  btnFlatText: {
    fontWeight: '600',
    color: Colors.white,
  },
});
