import React from "react";
import { Link } from "gatsby";

import Section from "./Section";

export default function Footer() {
  return (
    <footer className="container">
      <Section className="flex">
        <nav className="flex footer-links-container">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                className="twitterIcon-box"
                d="M448 512H64A64 64 0 0 1 0 448V64A64 64 0 0 1 64 0H448a64 64 0 0 1 64 64V448A64 64 0 0 1 448 512Z"
              />
              <path
                className="twitterIcon-bird"
                d="M196.6 386.1c120.7 0 186.8-100.1 186.8-186.7 0-2.8 0-5.6-0.1-8.4a133.8 133.8 0 0 0 32.8-34 133.2 133.2 0 0 1-37.8 10.4 66 66 0 0 0 28.9-36.3 130.7 130.7 0 0 1-41.7 15.9A65.7 65.7 0 0 0 251.9 191.6a72.1 72.1 0 0 0 1.7 15A186.4 186.4 0 0 1 118.3 138a65.9 65.9 0 0 0 20.4 87.7 66.2 66.2 0 0 1-29.7-8.2v0.9a65.8 65.8 0 0 0 52.6 64.4A65.7 65.7 0 0 1 132 283.9a65.6 65.6 0 0 0 61.3 45.6 131.6 131.6 0 0 1-81.5 28.2 126.3 126.3 0 0 1-15.6-0.9 186.7 186.7 0 0 0 100.5 29.3"
              />
            </svg>
          </a>

          <a
            href="https://github.com/sarquamon"
            title="Github repos @sarquamon"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.6 498.9">
              <path
                className="githubIcon-white githubIcon-rule"
                d="M255.8 0C114.5 0 0 114.5 0 255.8c0 113 73.3 208.9 174.9 242.7 12.8 2.4 17.5-5.5 17.5-12.3 0-6.1-0.2-26.2-0.3-47.6-71.1 15.5-86.2-30.2-86.2-30.2C94.2 378.8 77.5 371 77.5 371c-23.2-15.9 1.8-15.5 1.8-15.5 25.7 1.8 39.2 26.4 39.2 26.4 22.8 39.1 59.8 27.8 74.4 21.3 2.3-16.5 8.9-27.8 16.2-34.2-56.8-6.5-116.5-28.4-116.5-126.4 0-27.9 10-50.7 26.4-68.6-2.6-6.4-11.4-32.5 2.5-67.7 0 0 21.5-6.9 70.4 26.2a242.5 242.5 0 0 1 128.1 0c48.8-33.1 70.3-26.2 70.3-26.2 13.9 35.2 5.2 61.3 2.5 67.7C409 191.7 419 214.5 419 242.4c0 98.2-59.8 119.9-116.8 126.2 9.2 7.9 17.4 23.5 17.4 47.4 0 34.2-0.3 61.8-0.3 70.2 0 6.8 4.6 14.8 17.6 12.3 101.6-33.9 174.8-129.7 174.8-242.7C511.6 114.5 397 0 255.8 0Z"
              />
              <path
                className="githubIcon-white"
                d="M96.9 367.2c-0.6 1.3-2.6 1.7-4.4s-2.9-2.6-2.3-3.8 2.6-1.7 4.4-0.8 2.9 2.6 2.3 3.9Z"
              />
              <path
                className="githubIcon-white"
                d="M107.2 378.8c-1.2 1.1-3.6-5.2-1.2s-2-4.2-0.7-5.3 3.6-0.6 5.3 1.2 2 4.2 5.3Z"
              />
              <path
                className="githubIcon-white"
                d="M117.3 393.5c-1.6 1.1-4.1-5.7-2.2s-1.6-5 0-6.1 4.1-0.1 5.7 2.2 1.6 5 0 6.2Z"
              />
              <path
                className="githubIcon-white"
                d="M131.1 407.8c-1.4 1.6-4.4 1.1-6.6-1s-2.8-5-1.4-6.5 4.4-1.1 6.6 1 2.9 5 1.4 6.5Z"
              />
              <path
                className="githubIcon-white"
                d="M150.2 416c-0.6 2-3.5 2.9-6.4 2.1s-4.8-3.2-4.2-5.2 3.5-3 6.4-2 4.8 3.2 4.2 5.2Z"
              />
              <path
                className="githubIcon-white"
                d="M171.1 417.6c0.1 2.1-2.4 3.9-5.4 3.9s-5.5-1.6-5.6-3.7 2.4-3.9 5.5-3.9 5.5 1.6 5.5 3.7Z"
              />
              <path
                className="githubIcon-white"
                d="M190.6 414.2c0.4 2.1-1.7 4.2-4.8 4.7s-5.7-0.7-6.1-2.8 1.8-4.2 4.8-4.8 5.7 6.1 2.8Z"
              />
            </svg>
          </a>
        </nav>
      </Section>
    </footer>
  );
}
