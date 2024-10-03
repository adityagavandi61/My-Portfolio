import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <>
      <nav className="header flex justify-between pr-3">
        <div className="left">
          <h2>Portfolio of Aditya Gavandi</h2>
        </div>
        <div className="right">
          <ul className="nav-list flex gap-4">
            <li>
              <Link key="home" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link key="about" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link key="contact" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default navbar;
