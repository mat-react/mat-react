// @mui
import { GlobalStyles as MUIGlobalStyles } from "@mui/material";
import {useTheme} from "@mui/material";


export default function GlobalStyles() {

  const theme = useTheme()

  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        body: {
          fontFamily: "Plus Jakarta Sans, sans-serif",
          overflow: "hidden"
        }
      }}
    />
  );

  return inputGlobalStyles;
}
