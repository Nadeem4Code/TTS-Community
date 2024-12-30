import UnAnsweredQuestionDetail from '@/pages/unAnsweredQuestion/[id]';
import { View, StyleSheet } from 'react-native';

export default function unAnsweredQuestionDetail() {
  return (
    <View style={styles.container}>
      <UnAnsweredQuestionDetail />
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
