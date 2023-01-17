import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Socket from "../../../contexts/Socket";
import HomeView from "../../../views/public/HomeView";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Socket>
              <HomeView />
            </Socket>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
