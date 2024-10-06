import React from "react";
import Download_Icon from "../../public/assets/download_icon.png";
import About from "../components/about.jsx";
import anime from "../../public/assets/anime.gif";
import Navbar from "../components/navbar.jsx";
import Skills from "../components/skills.jsx";
import Achivements from "../components/achivements.jsx";
import Project from "../components/projects.jsx";
import { Link } from "react-router-dom";

function home() {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:px-16 bg-white mt-6 ">
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-600 font-semibold">
              Portfolio | Aditya Gavandi
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Software Developer
            </h1>
            <p className="text-gray-600">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <Link
              href="#"
              className="inline-block bg-black text-white py-2 px-6 mt-4 rounded-lg"
            >
              Resume
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <div className="profile-card relative">
              <img
                className="w-80 h-80 object-cover rounded-full shadow-2xl"
                src={anime}
                alt="Protrait"
              />
              <div className="absolute top-0 left-0 w-16 h-16 bg-teal-600 rounded-sm rotateaime shadow-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-500 rounded-sm rotateaime shadow-2xl"></div>
            </div>
          </div>
        </div>
        <div className="middle-line w-full p-5 h-[200px] pt-10">
          <Skills />
        </div>
        <About />
        <Project />
        <Achivements />
      </section>
    </>
  );
}

export default home;
