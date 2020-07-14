import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "../snowy.css";
import "../style.css";

interface props {
  children?: any;
}

export default function Layout({ children }: props) {
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href="/appLogo.png" />
      </Helmet>
      <Navbar />
      <main className="container" style={{ border: "4px yellow solid" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
