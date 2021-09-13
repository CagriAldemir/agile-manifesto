import { LANGUAGE_KEYS, THEMES } from '../../consts';
import { MAIN_ACTIONS } from './main-actions';

export const initialState = {
  languageKey: LANGUAGE_KEYS.TR,
  userInfo: null,
  theme: THEMES.LIGHT,
};

const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MAIN_ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        languageKey: payload,
      };

    case MAIN_ACTIONS.SET_USER_INFO:
      return {
        ...state,
        userInfo: payload,
      };

    case MAIN_ACTIONS.SET_THEME:
      return {
        ...state,
        theme: payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
