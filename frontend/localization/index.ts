import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, fr } from '../locales';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false, // Disable suspense as it's not supported by React Native yet
  },
});

export default i18n;
