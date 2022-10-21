import { createContext, useContext } from "react";
import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
// import { createTheme } from '@mui/material/styles'

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContext = createContext({});

const Theme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0e577e",
        dark: "#003049",
        light: "#64a0c0",
      },
      secondary: {
        main: "#d13232",
        dark: "#960000",
        light: "#f07474",
      },
      terciary: {
        main: "#FCBF49",
        dark: "#e49800",
        light: "#f3c770",
      },
    },
    typography: {
      htmlFontSize: 10,
      fontSize: 10,
      fontFamily: ["Nunito"].join(","),
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={{ theme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
};

export default Theme;
