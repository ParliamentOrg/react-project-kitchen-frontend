import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: ['ru', 'en'],
    debug: false,
    load: 'currentOnly',
    nsSeparator: false,
    react: {
      useSuspense: false
    }
  });


export default i18n;

export const languagesMap = {
  ru: i18n.t('Русский'),
  en: i18n.t('Английский'),
};