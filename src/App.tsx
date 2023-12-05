import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router/routes";
import "./styles.css";

const App = React.memo(() => {
  const routing = useRoutes(routes);

  return <>{routing}</>;
});

export default App;
