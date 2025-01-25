import { useContext } from 'react';
import { Card, Text, Avatar } from 'react-native-paper';
import {
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Css
import { createStyles } from './UnAnsweredQuestion.style';

// Local Import
import { QuestionContext } from '@/context/questions/QuestionsProvider';

export default function UnAnsweredQuestion() {
  const router = useRouter();
  const styles = createStyles();

  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error('There Is Not Any Unanswered Questions');
  }
  const { questions, loading } = context;

  // Route
const handleQuestionPress = (_id) => {
  console.log('Navigating to:', `/unAnsweredQuestionDetail/${_id}`);
  router.push(`/unAnsweredQuestionDetail/${_id}`);
};

  // Show loader if loading is true
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Show a message if there are no unanswered questions
  if (!questions.length) {
    return <Text>There are no unanswered questions</Text>;
  }

  console.log(questions, loading);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {questions.map((question) => (
        <TouchableOpacity
          key={question._id}
          onPress={() => handleQuestionPress(question._id)}
        >
          <Card mode="contained" style={styles.card}>
            <View style={styles.avatarContainer}>
              <Avatar.Image size={30} />
              {/* source={require('../assets/avatar.png')} */}
              <Text variant="bodyLarge" style={styles.userName}>
                Name Of User
              </Text>
            </View>
            <Card.Content>
              <Text variant="titleLarge">{question.question}</Text>
              <Text variant="titleLarge">{question.answer}</Text>
            </Card.Content>
            <Card.Actions>
              <View style={styles.dateContainer}>
                <Text>21 Oct 25</Text>
                <View style={styles.commentContainer}>
                  <FontAwesome
                    size={15}
                    name="thumbs-up"
                    style={styles.comment}
                  />
                  <Text>240</Text>
                </View>
                <View style={styles.commentContainer}>
                  <FontAwesome
                    size={15}
                    name="comment"
                    style={styles.comment}
                  />
                  <Text>8</Text>
                </View>
              </View>
              <View>
                <FontAwesome name="ellipsis-v" size={15} color="black" />
              </View>
            </Card.Actions>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

