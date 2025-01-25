import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router/stack';
import * as SplashScreen from 'expo-splash-screen';
import { PaperProvider } from 'react-native-paper';
import { AuthProvider } from '@/context/auth/AuthProvider';
import {
  QuestionContext,
  QuestionProvider,
} from '@/context/questions/QuestionsProvider';

import { lightTheme } from '../theme/lightTheme';
import { darkTheme } from '../theme/darkTheme';
import '../localization';
import Header from '@/components/Header';

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <AuthProvider>
      <QuestionProvider>
        <PaperProvider theme={theme}>
          <SafeAreaView style={styles.container}>
            <Header />
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(unAnsweredQuestion)" />
            </Stack>
          </SafeAreaView>
        </PaperProvider>
      </QuestionProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
