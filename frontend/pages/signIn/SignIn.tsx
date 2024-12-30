import { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';

import { styles } from './SignIn.style';

export default function SignIn() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { email, password });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card]}>
        <Text variant="displaySmall" style={styles.centeredTitle}>
          {t('auth.signIn.title')}
        </Text>
        <View>
          <TextInput
            label={t('auth.signIn.email')}
            mode="outlined"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.input}
          />
          <TextInput
            label={t('auth.signIn.password')}
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
            {t('auth.signIn.submit')}
          </Button>
        </View>
        <Link href="/forgotPassword" style={styles.forgotPassword}>
          {t('auth.signIn.forgotPassword')}
        </Link>
        <View style={styles.linkContainer}>
          <Text>{t('auth.signIn.account')}</Text>
          <Link href="/signUp" style={styles.link}>
            {t('auth.signIn.signUp')}
          </Link>
        </View>
      </View>
    </View>
  );
}
