import { DARK_MODE_CHANGER, LANGUAGE_CHANGER, SIDEBAR_TOGGLE } from "./types";



export const toggleDarkMode = (mode) => {
  return {
    type: DARK_MODE_CHANGER,
    payload: mode
  };
};

export const sidebarToggle = (mode) => {
  return {
    type: SIDEBAR_TOGGLE,
    payload: mode
  };
};


export const languageChagner = (lang) => {
  return {
    type: LANGUAGE_CHANGER,
    payload: lang
  };
};
