import SignUpPage from '@/pages/signUp/SignUp';
import { View, StyleSheet } from 'react-native';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <SignUpPage />
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
