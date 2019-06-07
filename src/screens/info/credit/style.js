import { StyleSheet } from 'react-native';
import { Colors } from '@src/constants';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.white
  },
  image: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderRadius: 100,
    marginVertical: 6,
    borderColor: Colors.primary,
  },
  content: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: Colors.primary,
  }
});
