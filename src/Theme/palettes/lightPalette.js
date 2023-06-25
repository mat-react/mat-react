const GREY = {
    100: "#F9F9F9",
    200: "#F4F4F4",
    300: "#E1E3EA",
    400: "#B5B5C3",
    500: "#A1A5B7",
    600: "#7E8299",
    700: "#5E6278",
    800: "#3F4254",
    900: "#181C32",

    RGB: {
        100: "249, 249, 249",
        200: "244, 244, 244",
        300: "225, 227, 234",
        400: "181, 181, 195",
        500: "161, 165, 183",
        600: "126, 130, 153",
        700: "94, 98, 120",
        800: "63, 66, 84",
        900: "24, 28, 50",
    }
}


const PRIMARY = {
    main: "#009ef7",
    active: "#0095e8",
    light: "#f1faff",
    inverse: "#ffffff",
    rgb: "0, 158, 247"
}
const SECONDARY = {
    main: "#E1E3EA",
    active: "#B5B5C3",
    light: "#F9F9F9",
    inverse: "#3F4254",
    rgb: "225, 227, 234"
}
const LIGHT = {
    main: "#F9F9F9",
    active: "#F4F4F4",
    inverse: "#7E8299",
    rgb: "249, 249, 249"
}
const SUCCESS = {
    main: "#50cd89",
    active: "#47be7d",
    light: "#e8fff3",
    inverse: "#ffffff",
    rgb: "80, 205, 137",
}
const INFO = {
    main: "#7239ea",
    active: "#5014d0",
    light: "#f8f5ff",
    inverse: "#ffffff",
    rgb: "114, 57, 234",
}
const WARNING = {
    main: "#ffc700",
    active: "#f1bc00",
    light: "#fff8dd",
    inverse: "#ffffff",
    rgb: "255, 199, 0",
}
const DANGER = {
    main: "#f1416c",
    active: "#d9214e",
    light: "#fff5f8",
    inverse: "#ffffff",
    rgb: "241, 65, 108",
}
const DARK = {
    main: "#181C32",
    active: "#131628",
    light: "#F4F4F4",
    inverse: "#ffffff",
    rgb: "24, 28, 50",
}


const BACKGROUND = {
    main: "#f5f8fa",
    active: "#131628",

    sidebar: "#1e1e2d",
    header: "#ffffff",

    overlay: "rgba(0, 0, 0, 0.05)",
    blockUiOverlay: "rgba(0, 0, 0, 0.05)",
}


const TEXT = {
    muted: "#A1A5B7",
    white: "#ffffff",
    primary: '#009ef7',
    secondary: "#E1E3EA",
    light: "#F9F9F9",
    success: "#50cd89",
    info: "#7239ea",
    warning: "#ffc700",
    danger: "#f1416c",
    dark: "#181C32",

    gray: {
        700: "#7E8299",
    }
}

const BORDER = {
    color: "#F4F4F4",
    dashed: "#E1E3EA",
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


const lightPalette = {

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

export default lightPalette;