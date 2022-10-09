import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouteMap } from "./utils/routeMap";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {RouteMap.map((items, index) => (
          <Route path={items.path} element={items.element} key={index} />
        ))}
      </Routes>
    </Router>
  );
}
