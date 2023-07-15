<<<<<<< HEAD
import { DARK_MODE_CHANGER, LANGUAGE_CHANGER, SIDEBAR_TOGGLE } from "./types";
=======
import { APP_MODE_CHANGER, LANGUAGE_CHANGER } from "./types";
>>>>>>> new_theme



export const toggleDarkMode = (mode) => {
  return {
<<<<<<< HEAD
    type: DARK_MODE_CHANGER,
=======
    type: APP_MODE_CHANGER,
>>>>>>> new_theme
    payload: mode
  };
};

<<<<<<< HEAD
export const sidebarToggle = (mode) => {
  return {
    type: SIDEBAR_TOGGLE,
    payload: mode
  };
};
=======
>>>>>>> new_theme


export const languageChagner = (lang) => {
  return {
    type: LANGUAGE_CHANGER,
    payload: lang
  };
};
