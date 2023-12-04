import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ThemeProvider theme={theme}>
    {GlobalStyles()}
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
