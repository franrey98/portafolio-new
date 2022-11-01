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
        dark: "#174a66",
        light: "#64a0c0",
      },
      secondary: {
        main: "#c01717",
        dark: "#4d0b0b",
        light: "#da5f5f",
      },
      terciary: {
        main: "#690672",
        dark: "#750370",
        light: "#a73a9d",
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
