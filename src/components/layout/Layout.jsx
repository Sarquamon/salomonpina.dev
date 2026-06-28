import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

import "./layout.css";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Hello from Layout!</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
