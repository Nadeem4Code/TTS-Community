import { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';

import { styles } from './SignUp.style';

export default function SignUpPage() {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { firstName, lastName, email, password });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card]}>
        <Text variant="displaySmall" style={styles.centeredTitle}>
          {t('auth.signUp.title')}
        </Text>
        <View>
          <TextInput
            label={t('auth.signUp.firstName')}
            mode="outlined"
            value={firstName}
            onChangeText={(text) => {
              setFirstName(text);
            }}
            style={styles.input}
          />
          <TextInput
            label={t('auth.signUp.lastName')}
            mode="outlined"
            value={lastName}
            onChangeText={(text) => {
              setLastName(text);
            }}
            style={styles.input}
          />
          <TextInput
            label={t('auth.signUp.email')}
            mode="outlined"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.input}
          />
          <TextInput
            label={t('auth.signUp.password')}
            mode="outlined"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View>
          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.submitButton}
          >
            {t('auth.signUp.submit')}
          </Button>
        </View>
        <View style={styles.linkContainer}>
          <Text>{t('auth.signUp.account')}</Text>
          <Link href="/signIn" style={styles.link}>
            {t('auth.signUp.signIn')}
          </Link>
        </View>
      </View>
    </View>
  );
}
