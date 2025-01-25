import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  card: {
    width: '100%',
    borderRadius: 5,
    elevation: 0,
  },
  centeredTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '800',
    marginTop: 20,
  },
  input: {
    marginBottom: 15,
  },
  submitButton: {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  link: {
    color: 'blue',
  },
});
