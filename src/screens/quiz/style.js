import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  footer: {
    padding: 7,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: '#0000000d',
  },
  footerText: {
    fontSize: 12,
    color: Colors.white,
  },
  btnBack: {
    height: 25,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  btnBackText: {
    fontSize: 10,
    color: Colors.primary,
  },
  slide: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  itemHeader: {
    height: 50,
    position: 'relative',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.border,
  },
  headerSide: {
    width: 55,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnHeader: {
    paddingRight: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.transparent,
  },
  headerContent: {
    flex: 1,
    zIndex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleCover: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: 'bold',
    color: Colors.white,
  },
  itemContent: {
    flex: 1,
    padding: 30,
  },
  question: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    lineHeight: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
    fontSize: Sizes.medium,
  },
  option: {
    height: 42,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.border
  },
  optionText: {
    fontSize: 14,
    color: Colors.black,
  },
  selected: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  selectedText: {
    color: Colors.white,
  },
  footerTop: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    height: 40,
    minWidth: 200,
    borderRadius: 10,
    borderColor: Colors.white,
    backgroundColor: Colors.transparent,
  },
  submitText: {
    color: Colors.white,
  }
});
