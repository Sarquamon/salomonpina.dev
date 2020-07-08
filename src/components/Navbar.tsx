import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">
          <span>🚀</span> Salomón Piña
        </Link>
      </li>
      <li>
        <Link to="/guides">Guides</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  );
}
