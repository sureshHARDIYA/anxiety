import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '@src/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnFooter: {
    borderRadius: 20,
    borderColor: Colors.white,
  },
  btnFooterText: {
    color: Colors.white,
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 55,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.white,
  },
  progressView: {
    width: '100%',
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreResult: {
    width: '100%',
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.white,
    fontSize: Sizes.medium,
  },
  benchmark: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '600',
    color: Colors.white,
    textDecorationLine: 'underline'
  },
  benchmarkItem: {
    lineHeight: 25,
    color: Colors.white,
  }
});
