import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/tutorials"}>Tutorials</Link>
        </li>
        <li>
          <Link to={"/sitemap"}>Sitemap</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
