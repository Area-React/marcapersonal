import { DashboardRoutes } from "./DashboardRoutes";
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={
          <DashboardRoutes/>
        } />
        {/* <Navigate to="/home" /> */}
      </Routes>
    </BrowserRouter>
  );
};
