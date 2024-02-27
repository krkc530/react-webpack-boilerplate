import { initReactI18next } from 'react-i18next';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en';
import ko from './ko';

// eslint-disable-next-line import/no-named-as-default-member
i18next.use(initReactI18next).use(LanguageDetector).init({
  resources: {
    en,
    ko,
  },
  fallbackLng: 'en', // if language detector failed
});

i18next.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

export default i18next;
