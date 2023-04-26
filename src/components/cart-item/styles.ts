import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
    marginHorizontal: 10,
  },
  viewButton: {
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  nameText: {
    maxWidth: 200,
  },
  blackText: {
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    width: 30,
    height: 40,
  },
});
