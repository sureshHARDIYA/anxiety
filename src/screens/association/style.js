import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    padding: 10,
    paddingTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtSubmit: {
    color: Colors.white,
  },
  btnBack: {
    borderWidth: 0,
  },
  btnSubmit: {
    borderWidth: 0,
    marginRight: 15,
  },
  content: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.border,
    backgroundColor: Colors.white,

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
  title: {
    bottom: 0,
    padding: 10,
    fontWeight: '600',
    color: Colors.black,
    fontSize: Sizes.huge,
  },
  caption: {
    padding: 10,
    color: Colors.gray,
  },
  btn: {
    marginLeft: 10,
    marginRight: 10,
    paddingRight: 20,
    alignItems: 'center',
    borderColor: Colors.white,
  },
  cardHeader: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  footerBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    padding: 10,
  },
  btnIcon: {
    color: 'red',
  },
  leftMoving: {
  },
  rightMoving: {
  },
  bottomMoving: {
  },
  headerText: {
    padding: 5,
    opacity: 0,
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 20,
    paddingRight: 20,
    position: 'absolute',
    color: Colors.gray,
  },
  leftText: {
    top: 30,
    right: -15,
    opacity: 1,
    transform: [{ rotate: '45deg' }],
  },
  rightText: {
    top: 30,
    left: 0,
    opacity: 1,
    transform: [{ rotate: '-45deg' }],
  },
  bottomText: {
    top: 30,
    left: '50%',
    opacity: 1,
    marginLeft: -50,
  }
});
