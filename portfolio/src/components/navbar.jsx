import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <>
      <nav class="flex justify-between items-center p-6 bg-white">
        <div class="text-xl font-bold">ADITYA GAVANDI</div>
        <div>
          <a
            key="home"
            href={"/"}
            className="text-gray-700 mx-4 hover:font-bold"
            title="Home"
          >
            Home
          </a>
          <a
            key="about"
            href={"#about"}
            className="text-gray-700 mx-4 hover:font-bold"
            title="About"
          >
            About
          </a>
          <a
            key="project"
            href={"#project"}
            className="text-gray-700 mx-4 hover:font-bold"
            title="Project"
          >
            Project
          </a>
          <a
            key="footer"
            href={"#footer"}
            className="text-gray-700 mx-4 hover:font-bold"
            title="Contact"
          >
            Contact
          </a>
          <Link
            key="GitHub"
            to={"https://github.com/adityagavandi61"}
            target="_blank"
            className="text-gray-700 mx-4 hover:font-bold"
            title="GitHub: adityagavandi61"
          >
            GitHub
          </Link>
          <Link
            key="LinkedIn"
            target="_blank"
            to={"https://www.linkedin.com/in/adityagavandi"}
            className="text-gray-700 mx-4 hover:font-bold"
            title="LinkedIn: adityagavandi"
          >
            LinkedIn
          </Link>
        </div>
      </nav>
    </>
  );
}

export default navbar;
