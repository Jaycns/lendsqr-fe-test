import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import UserDetails from "../pages/userdetails";
import { Routes, useLocation, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const RouteMap = [
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

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {RouteMap.map((items, index) => (
          <Route path={items.path} element={items.element} key={index} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};
export default Pages;
