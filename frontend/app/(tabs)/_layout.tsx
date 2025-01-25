import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';



export default function TabLayout() {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('home.homeTab'),
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="UnAnsweredQuestions"
        options={{
          title: t('home.questions'),
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: t('home.settings'),
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
