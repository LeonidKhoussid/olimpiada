import * as React from "react";
import Layout from "src/layout/Layout";
import { coreRoutes } from "./coreRoutes";
import uris from "../uris";
import Redirect from "../Redirect";

const routes = [
  {
    path: uris.ROOT,
    element: <Layout />,
    children: [...coreRoutes],
  },
  {
    path: uris.ALL,
    element: <Redirect to={uris.ROOT} replace={true} />,
  },
];

export default routes;
