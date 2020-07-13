import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav className="navbar" style={{ border: "4px solid red" }}>
      <div className="container flex">
        <div>
          <Link to="/" className="brand">
            <span className="emoji">🚀</span>{" "}
            <span className="name">Salomón Piña</span>
          </Link>
        </div>
        <div>
          <Link to="/guides">Guides</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/trips">Trips</Link>
        </div>
      </div>
    </nav>
  );
}
