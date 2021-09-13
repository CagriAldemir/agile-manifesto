import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGE_KEYS } from '../consts';
import locales from './locales';

const handleResourcesByLangKeys = (locale, langKeys) =>
  langKeys.reduce((acc, langKey) => {
    acc[langKey] = {
      translation: {},
    };
    Object.keys(locale).forEach((localeKey) => {
      acc[langKey].translation[localeKey] =
        locale[localeKey][langKey.toLowerCase()];
    });
    return acc;
  }, {});

i18n.use(initReactI18next).init({
  resources: handleResourcesByLangKeys(locales, Object.values(LANGUAGE_KEYS)),
  lng: LANGUAGE_KEYS.TR,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
