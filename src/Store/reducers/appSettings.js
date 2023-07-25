import { APP_MODE_CHANGER, LANGUAGE_CHANGER, SIDEBAR_TOGGLER } from "../actions/types";

const initialState = {
    appMode: "light",
    lang: 'en',
    dir: 'ltr',
    sidebar: false,
};

export const appSettingsReducer = (state = initialState, action) => {
  switch (action.type) {

    case APP_MODE_CHANGER:
        var mode = "light"
        if(action.payload && action.payload !== ""){
          mode = action.payload
        }
        localStorage.setItem("appMode", mode)
        
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
        let {ln, dir} = action.payload
        if(dir !== "rtl" && dir !== "ltr"){
          dir = "ltr"
        }
        localStorage.setItem("lang", ln)
        localStorage.setItem("dir", dir)
        document.documentElement.lang = ln;
        document.documentElement.dir = dir;
        return {
            ...state,
            lang: ln,
            dir: dir,
        };
      
    case SIDEBAR_TOGGLER:
      return { 
        ...state,
        sidebar: !state.sidebar,
    };

    default:
        return state;
  }
};
