import { LANGUAGE_KEYS, THEMES } from '../../consts';

export const MAIN_ACTIONS = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_USER_INFO: 'SET_USER_INFO',
  SET_THEME: 'SET_THEME',
};

export const setLanguage = (languageKey = LANGUAGE_KEYS.TR) => ({
  type: MAIN_ACTIONS.SET_LANGUAGE,
  payload: languageKey,
});

export const setUserInfo = (userInfo) => ({
  type: MAIN_ACTIONS.SET_USER_INFO,
  payload: userInfo,
});

export const setTheme = (theme = THEMES.LIGHT) => ({
  type: MAIN_ACTIONS.SET_THEME,
  payload: theme,
});
