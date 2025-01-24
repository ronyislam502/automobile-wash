import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RouteGenerators from "../Utils/RouteGenerators";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: RouteGenerators(),
  },
  {
    path: "/admin",
    element: <App />,
    children: RouteGenerators(),
  },
]);

export default router;
