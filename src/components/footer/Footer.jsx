import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer_footer">
      <nav className="footer_content">
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
    </footer>
  );
};
