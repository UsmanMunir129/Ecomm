import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@material-ui/core";
import Routees from "./Routes/Routees";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div className="App">
        <Routees />
      </div>
    </ThemeProvider>
  );
}

export default App;
