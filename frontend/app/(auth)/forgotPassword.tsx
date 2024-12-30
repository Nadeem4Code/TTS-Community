import ForgotPassword from '@/pages/forgotPassword/ForgotPassword';
import { View, StyleSheet } from 'react-native';

export default function ForgotPassWord() {
  return (
    <View style={styles.container}>
      <ForgotPassword />
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
