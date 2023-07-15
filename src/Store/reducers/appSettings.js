import { APP_MODE_CHANGER, LANGUAGE_CHANGER } from "../actions/types";

const initialState = {
    appMode: "light",
    lang: 'en'
};

export const appSettingsReducer = (state = initialState, action) => {
  switch (action.type) {

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
  }
};
