
const GREY = {
    100: "#1b1b29",
    200: "#2B2B40",
    300: "#323248",
    400: "#474761",
    500: "#565674",
    600: "#6D6D80",
    700: "#92929F",
    800: "#CDCDDE",
    900: "#FFFFFF",

    RGB: {
        100: "27, 27, 41",
        200: "43, 43, 64",
        300: "50, 50, 72",
        400: "71, 71, 97",
        500: "86, 86, 116",
        600: "109, 109, 128",
        700: "146, 146, 159",
        800: "205, 205, 222",
        900: "255, 255, 255",
    }
}


const PRIMARY = {
    main: "#009ef7",
    active: "#0095e8",
    light: "#212e48",
    inverse: "#ffffff",
    rgb: "0, 158, 247"
}
const SECONDARY = {
    main: "#323248",
    active: "#474761",
    light: "#1b1b29",
    inverse: "#92929F",
    rgb: "50, 50, 72"
}
const LIGHT = {
    main: "#2B2B40",
    active: "#323248",
    inverse: "#7E8299",
    rgb: "43, 43, 64"
}
const SUCCESS = {
    main: "#50cd89",
    active: "#47be7d",
    light: "#1c3238",
    inverse: "#ffffff",
    rgb: "80, 205, 137",
}
const INFO = {
    main: "#7239ea",
    active: "#5014d0",
    light: "#2f264f",
    inverse: "#ffffff",
    rgb: "114, 57, 234",
}
const WARNING = {
    main: "#ffc700",
    active: "#f1bc00",
    light: "#392f28",
    inverse: "#ffffff",
    rgb: "255, 199, 0",
}
const DANGER = {
    main: "#f1416c",
    active: "#d9214e",
    light: "#3a2434",
    inverse: "#ffffff",
    rgb: "241, 65, 108",
}
const DARK = {
    main: "#FFFFFF",
    active: "#ffffff",
    light: "#2B2B40",
    inverse: "#1b1b29",
    rgb: "255, 255, 255",
}


const BACKGROUND = {
    default: "#151521",
    active: "#131628",

    sidebar: "#1e1e2d",

    overlay: "rgba(0, 0, 0, 0.05)",
    blockUiOverlay: "rgba(0, 0, 0, 0.05)",
}


const TEXT = {
    muted: "#565674",
    white: "#ffffff",
    primary: '#009ef7',
    secondary: "#323248",
    light: "#2B2B40",
    success: "#50cd89",
    info: "#7239ea",
    warning: "#ffc700",
    danger: "#f1416c",
    dark: "#FFFFFF",
}

const BORDER = {
    color: "#2B2B40",
    dashed: "#323248",
}

const COMPONENT = {
    active: "#ffffff",
    activeBg: "#009ef7",
    hoverColor: "#009ef7",
    hoverBg: "#F9F9F9",
    checkedColor: "#ffffff",
    checkedBg: "#009ef7",

    scrollbar: "#f4f4f4",
    scrollbarHover: "#efefef",
    scrollbarSize: "5px",
    scrollbarOverlaySize: "19px",
    scrollbarOverlaySpace: "7px",
}

const SHADOWS = {
    default: '0 0.5rem 1.5rem 0.5rem rgba(0, 0, 0, 0.075)',
    xs: "0 0.1rem 0.75rem 0.25rem rgba(0, 0, 0, 0.05)",
    sm: "0 0.1rem 1rem 0.25rem rgba(0, 0, 0, 0.05)",
    lg: "0 1rem 2rem 1rem rgba(0, 0, 0, 0.1)"
}


const darkPalette = {

    primary: PRIMARY,
    secondary: SECONDARY,
    grey: GREY,
    info: INFO,
    danger: DANGER,
    warning: WARNING,
    light: LIGHT,
    success: SUCCESS,
    dark: DARK,

    background: BACKGROUND,

    border: BORDER,
    shadows: SHADOWS,
    component: COMPONENT,

    text: TEXT
}


export default darkPalette;