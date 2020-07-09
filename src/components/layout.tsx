import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "./Navbar";

import "../snowy.css";

interface props {
  children?: any;
}

export default function Layout({ children }: props) {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href="/appLogo.png" />
      </Helmet>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
