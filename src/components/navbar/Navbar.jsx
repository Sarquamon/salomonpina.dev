import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <header className="navbar_header">
      <nav className="navbar_nav">
        <ul className="navbar_list">
          <li className={"navbar_item"}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className={"navbar_item"}>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className={"navbar_item"}>
            <NavLink to={"/tutorials"}>Tutorials</NavLink>
          </li>
          <li className={"navbar_item"}>
            <NavLink to={"/sitemap"}>Sitemap</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
