import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./utils/routeMap";

export default function AppRouter() {
  return (
    <Router>
      <Pages />
    </Router>
  );
}
