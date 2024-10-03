import React from "react";
import Download_Icon from "../../public/assets/download_icon.png";
import Navbar from "../components/navbar.jsx";
import Skills from "../components/skills.jsx";
import Achivements from "../components/achivements.jsx";
import Project from "../components/projects.jsx";

function home() {
  return (
    <>
      <Navbar />
      <div className="container w-[97%]">
        <div className="head-container flex justify-between items-center p-10 m-10 px-24">
          <div className="left w-1/2">
            <span>
              <h1>Portfolio | Aditya Gavandi</h1>
            </span>
            <span>
              <b>Software Developer</b>
            </span>
            <div className="tagline">
              <p>
                Passionate about building software that solves real problems.
              </p>
            </div>
              <button className="download-btn flex align-center gap-1">
                <span>
                  <img
                    src={Download_Icon}
                    alt="download-icon"
                    className="download-icon w-8"
                  />
                </span>
                <b>Resume</b>
              </button>
          </div>
          <div className="right w-1/2">
            <img src="/src/assets/profile.png" className="profile " alt="profile-picture" />
          </div>
        </div>
        <div className="middle-line w-full p-5 m-3 px-6">
          <Skills />
        </div>
        <Project />
        <Achivements />
      </div>
    </>
  );
}

export default home;
