import { usePathname, useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Need to replaced with real content dont put in locale this text */}
      <Text>Home Tab</Text>
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
