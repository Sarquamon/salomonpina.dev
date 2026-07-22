import React from "react";
import { NavLink } from "react-router-dom";

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer_footer">
      <div className="footer_content">
        <div>
          {/* TODO: Update wording */}
          <NavLink to={"/"}>
            <img src="" alt="logo" />
          </NavLink>
          <p>
            Hey! I'm Salomón Piña Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Molestiae, rerum.
          </p>
          <br />
          <p>salomonpina.dev licenses all source code on this website under the MIT License.</p>
        </div>
        <nav className="footer_nav_content">
          <ul className="footer_navbar_list">
            <li>
              <h2>Links</h2>
            </li>
            <li className={"footer_navbar_item"}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className={"footer_navbar_item"}>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className={"footer_navbar_item"}>
              <NavLink to={"/tutorials"}>Tutorials</NavLink>
            </li>
            <li className={"footer_navbar_item"}>
              <NavLink to={"/sitemap"}>Sitemap</NavLink>
            </li>
          </ul>
        </nav>
        <nav className="footer_nav_content">
          <ul className="footer_navbar_list">
            <li>
              <h2>About</h2>
            </li>
            <li className={"footer_navbar_item"}>
              <NavLink to={"/aboutme"}>About Me</NavLink>
            </li>
            <li className={"footer_navbar_item"}>
              <NavLink to={"/license"}>License</NavLink>
            </li>
            <li className={"footer_navbar_item"}>
              <NavLink to={"/privacypolicy"}>Privacy Policy</NavLink>
            </li>
            <li className={"footer_navbar_item"}>
              <NavLink to={"/contact"}>Contact Me</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright_wrapper">
        <p className="copyright_statement">© 2026 Sarquamon - Built with love.</p>
      </div>
    </footer>
  );
};
