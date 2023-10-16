import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import Routees from "./Routes/Routees";

function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#6251FE",
      },
      secondary: {
        main: "#B9B6B6",
      },
      subSecondary: {
        main: "#008000",
      },
    },
    typography: {
      fontFamily: ["Poppins"].join(","),
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  theme.typography.h6 = {
    [theme.breakpoints.up("xs")]: {
      fontSize: "1.17rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.17rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.25rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.25rem",
    },
  };
  theme.typography.caption = {
    [theme.breakpoints.up("xs")]: {
      fontSize: "0.83rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.17rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.37rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.37rem",
    },
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routees />
      </ThemeProvider>
    </div>
  );
}

export default App;
