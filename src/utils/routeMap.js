import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import UserDetails from "../pages/userdetails";

export const RouteMap = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/user_details/:id",
    element: <UserDetails />,
  },
];
