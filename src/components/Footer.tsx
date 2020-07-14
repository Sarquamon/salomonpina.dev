import React from "react";
import { Link } from "gatsby";

import twitterIcon from "../../static/twitter-icon_512.svg";
import githubIcon from "../../static/github-icon_512.svg";

export default function Footer() {
  return (
    <footer className="footer container">
      <section className="flex">
        <nav className="footer-links-container">
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/journeys" className="footer-link">
            Journeys
          </Link>
          <Link to="/blog" className="footer-link">
            Blog
          </Link>
        </nav>
        <nav className="flex">
          <a
            href="https://twitter.com/sarquamon"
            title="Twitter @sarquamon"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img
              src={twitterIcon}
              alt="Twitter @sarquamon"
              className="footer-img"
            />
          </a>
          <a
            href="https://github.com/sarquamon"
            title="Github repos @sarquamon"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img
              src={githubIcon}
              alt="Github @sarquamon"
              className="footer-img"
            />
          </a>
        </nav>
      </section>
    </footer>
  );
}
