import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//object parameter .init
i18n.use(initReactI18next).init({
 // fallback language and default language
  fallbackLng: 'en',
  lng: 'en',
  //JSON files with the translations 
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    ar: {
      translations: require('./locales/ar/translations.json')
    }
  },
  //namespaces (ns) and default namespace (defaultNS)
  //keys from the resources object.
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'ar'];

export default i18n;