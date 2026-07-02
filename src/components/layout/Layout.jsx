import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

import "./layout.css";

export const Layout = () => {
  return (
    <div className="layout_shell">
      <Navbar />
      <main className="layout_container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
