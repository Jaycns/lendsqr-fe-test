import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

export const RouteMap = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
