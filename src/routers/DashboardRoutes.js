import React from "react";
import { NavbarTopMenu } from "../components/structure/navbar-top-menu/NavbarTopMenu";
import { Navbar } from "../components/structure/navbar/navbar/Navbar";
import { Slider } from "../home/slider/Slider";
// import { Sidebar } from "../sidebar/Sidebar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <NavbarTopMenu />
      <Slider />
      {/* <Sidebar /> */}
    </>
  );
};
