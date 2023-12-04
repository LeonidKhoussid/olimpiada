import { RouteObject } from "react-router-dom";
import Error from "src/layout/Error";
import uris from "../uris";
import LandingPage from "src/pages/Landing";

export const coreRoutes = [
  {
    path: uris.ERROR,
    element: <Error />,
  },
  {
    path: uris.ROOT,
    element: <LandingPage />,
  },
] as RouteObject[];
