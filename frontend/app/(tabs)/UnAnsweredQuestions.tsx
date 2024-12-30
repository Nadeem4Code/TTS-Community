import { View, StyleSheet } from 'react-native';

// Local Import
import UnAnsweredQuestion from '@/pages/unAnsweredQuestion/UnAnsweredQuestion';

export default function UnAnsweredQuestions() {
  return (
    <>
      <View style={styles.container}>
        <UnAnsweredQuestion />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
