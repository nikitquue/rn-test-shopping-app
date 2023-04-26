import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 14,
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textInfoContainer: {
    maxWidth: 200,
  },
  text: {},
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  img: {marginRight: 10, width: 200, height: 300},
});
