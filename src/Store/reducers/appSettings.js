<<<<<<< HEAD
import { SIDEBAR_TOGGLE, DARK_MODE_CHANGER, LANGUAGE_CHANGER } from "../actions/types";

const initialState = {
  sidebarMode: true,
  darkMode: false,
  appMode: "l",
  lang: 'en'
=======
import { APP_MODE_CHANGER, LANGUAGE_CHANGER } from "../actions/types";

const initialState = {
    appMode: "light",
    lang: 'en'
>>>>>>> new_theme
};

export const appSettingsReducer = (state = initialState, action) => {
  switch (action.type) {

<<<<<<< HEAD
    case SIDEBAR_TOGGLE:
      return {
        ...state,
        sidebarMode: action.payload,
      };


    case DARK_MODE_CHANGER:
      const mode = action.payload === "d" ? true : false
      localStorage.setItem("darkMode", action.payload)
      return {
        ...state,
        darkMode: mode,
        appMode: action.payload
      };


    case LANGUAGE_CHANGER:
      localStorage.setItem("lang", action.payload)
      document.documentElement.lang = action.payload;
      return {
        ...state,
        lang: action.payload,
      };


    default:
      return state;
=======
    case APP_MODE_CHANGER:
        localStorage.setItem("appMode", action.payload)
        var mode = action.payload
        if(mode === "system") {
          if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            mode = "dark"
          }else {
            mode = "light"
          }
        }
        const body = document.querySelector("body")
        body.classList.remove("dark");
        body.classList.remove("light");
        body.classList.add(mode);
        return {
            ...state,
            appMode: action.payload
        };


    case LANGUAGE_CHANGER:
        localStorage.setItem("lang", action.payload)
        document.documentElement.lang = action.payload;
        return {
            ...state,
            lang: action.payload,
        };


    default:
        return state;
>>>>>>> new_theme
  }
};
