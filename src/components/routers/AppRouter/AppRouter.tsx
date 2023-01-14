import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "../../../views/public/HomeView";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
