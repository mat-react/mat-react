import { SIDEBAR_TOGGLE, DARK_MODE_CHANGER, LANGUAGE_CHANGER } from "../actions/types";

const initialState = {
    sidebarMode: true,
    darkMode: false,
    appMode: "l",
    lang: 'en'
};

export const appSettingsReducer = (state = initialState, action) => {
  switch (action.type) {

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
  }
};
