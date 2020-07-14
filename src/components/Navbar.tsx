import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex">
        <div>
          <Link to="/" className="brand">
            <span className="emoji">🚀</span>{" "}
            <span className="name">Salomón Piña</span>
          </Link>
        </div>
        <div>
          <Link to="/about">About</Link>
          <Link to="/journeys">Journeys</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
