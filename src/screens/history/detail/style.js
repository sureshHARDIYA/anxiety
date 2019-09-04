import { Colors } from '@src/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },
  question: {
    marginBottom: 8,
    fontWeight: '600',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  answer: {
    paddingLeft: 12,
    color: Colors.black
  },
  header: {
    padding: 15,
    textAlign: 'center',
    color: Colors.white,
    backgroundColor: Colors.primary,
  },
});
