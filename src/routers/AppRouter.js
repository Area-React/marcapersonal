import React from "react";
import { DashboardRoutes } from "./DashboardRoutes";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import { MapaRoutes } from "./MapaRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={DashboardRoutes} />
        <Route exact path="/mapa" component={MapaRoutes} />
      </div>
    </Router>
  );
};
