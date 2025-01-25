import { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { styles } from './ForgotPassword.style';

export default function ForgotPassword() {
  const { t } = useTranslation();

  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {
    console.log('Form submitted:', { email });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card]}>
        <Text variant="displaySmall" style={styles.centeredTitle}>
          {t('auth.forgotPassword.title')}
        </Text>
        <View>
          <TextInput
            label={t('auth.forgotPassword.email')}
            mode="outlined"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
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
      </View>
    </View>
  );
}
