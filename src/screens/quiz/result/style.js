import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '@src/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  content: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  btnFooter: {
    margin: 30,
    borderRadius: 40,
    backgroundColor: Colors.white,
  },
  btnFooterText: {
    color: Colors.primary,
  },
  header: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 90,
    fontWeight: '100',
    textAlign: 'center',
    color: Colors.white,
  },
  bold: {
    fontWeight: '400',
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
    textAlign: 'left',
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
  },
  headerBar: {
    padding: 20,
    textAlign: 'center',
    color: Colors.white,
    fontSize: Sizes.large,
  },
  headerTop: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(36, 40, 42, 0.38)'
  },
  headerTopRight: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerTime: {
    padding: 2,
    fontWeight: '600',
    color: Colors.white,
  }
});
