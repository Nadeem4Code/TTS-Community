import { usePathname } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  const pathname = usePathname();
  return (
    <View style={styles.container}>
      {/* Need to replaced with real content dont put in locale this text */}
      <Text>Tab Settings : {pathname}</Text>
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
