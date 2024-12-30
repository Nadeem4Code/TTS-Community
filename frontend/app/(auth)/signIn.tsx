import SignIn from '@/pages/signIn/SignIn';
import { View, StyleSheet } from 'react-native';

export default function SingIn() {
  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
