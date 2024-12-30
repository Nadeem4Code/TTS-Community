import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function UnAnsweredQuestionDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Question ID: {id}</Text>
    </View>
  );
}
