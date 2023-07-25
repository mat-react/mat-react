import { APP_MODE_CHANGER, LANGUAGE_CHANGER, SIDEBAR_TOGGLER } from "./types";



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


export const sidebarOpener = () => {
  return {
    type: SIDEBAR_TOGGLER
  };
};
