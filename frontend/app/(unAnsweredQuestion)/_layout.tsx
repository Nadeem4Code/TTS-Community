import { Stack } from 'expo-router';
import Header from '@/components/UnAnsweredQuestions/Header';


export default function unAnsweredQuestionDetailLayout() {
  return (
    <>
      <Header />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="unansweredQuestion/[id]" />
      </Stack>
    </>
  );
}
