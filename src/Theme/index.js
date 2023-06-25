import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

// palettes
import lightPalette from './palettes/lightPalette';
import darkPalette from './palettes/darkPalette';
import defaultPalette from './palettes/defaultPalette';
import GlobalStyles from './globalStyles';

import typography from './typography';


function ThemeProvider({ children }) {

  const darkMode = useSelector(state => state.app.darkMode)
  const mode = darkMode ? 'dark' : 'light'


  const themeOptions = useMemo(
    () => ({
      palette:{
        mode,
        ...(mode === 'light'
        ? {
            ...lightPalette
          }
        : {
            ...darkPalette
          }),
        ...defaultPalette
      },

      typography,

      breakpoints: {
        values: {
          xs: 0,
          sms: 400,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },

    }),
    [mode]
  );


  const theme = createTheme(themeOptions);
  // theme.components = componentsOverride(theme);



  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}


ThemeProvider.propTypes = {
  children: PropTypes.node
}; 

export default ThemeProvider


  