import { APP_MODE_CHANGER, LANGUAGE_CHANGER } from "./types";



export const toggleDarkMode = (mode) => {
  return {
    type: APP_MODE_CHANGER,
    payload: mode
  };
};



export const languageChagner = (lang) => {
  return {
    type: LANGUAGE_CHANGER,
    payload: lang
  };
};
