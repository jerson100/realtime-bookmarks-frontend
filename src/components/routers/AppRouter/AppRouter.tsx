import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Socket from "../../../contexts/Socket";
import HomeView from "../../../views/public/HomeView";
import CurrentUser from "../../commons/CurrentUser";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Socket>
              <CurrentUser />
              <HomeView />
            </Socket>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
