import { LANGUAGE_KEYS, THEMES } from '../../consts';
import i18n from '../../i18n';

export const MAIN_ACTIONS = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_USER_INFO: 'SET_USER_INFO',
  SET_THEME: 'SET_THEME',
};

export const setLanguage = (languageKey = LANGUAGE_KEYS.TR) => {
  i18n.changeLanguage(languageKey);

  return {
    type: MAIN_ACTIONS.SET_LANGUAGE,
    payload: languageKey,
  };
};

export const setUserInfo = (userInfo) => ({
  type: MAIN_ACTIONS.SET_USER_INFO,
  payload: userInfo,
});

export const setTheme = (theme = THEMES.LIGHT) => ({
  type: MAIN_ACTIONS.SET_THEME,
  payload: theme,
});
