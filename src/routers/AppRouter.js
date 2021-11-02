import React from "react";
import { DashboardRoutes } from "./DashboardRoutes";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Redirect,
} from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={DashboardRoutes} />
      </div>
    </Router>
  );
};
