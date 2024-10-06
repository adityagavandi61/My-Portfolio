import React from "react";
import ProjectImg from "../../public/assets/150x150.jpg";
import { Link } from "react-router-dom";

function projects() {
  return (
    <>
      <div className="project-container min-h-screen mt-3 pb-11">
        <div className="projects flex flex-col p-16" id="project">
          <h1 className="text-center text-3xl">
            <b>Projects</b>
          </h1>
          <ul className="project-list flex flex-row justify-center gap-4 p-8 mb-2">
            <li className="card flex flex-col relative rounded-md overflow-hidden w-[300px]">
              <img
                src={ProjectImg}
                className="project-img object-contain rounded-md"
                alt=""
              />
              <div className="info absolute w-full h-[128%] pt-[87%] hover:pt-[40%] hover:bg-black hover:bg-opacity-10 transition-all duration-300 flex flex-col items-center gap-4 cursor-pointer">
                <h1>
                  <b>Project Title</b>
                </h1>
                <p className="text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="project-btn flex flex-row gap-3">
                  <Link class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-1 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    GitHub
                  </Link>
                  <Link class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-1 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Live
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default projects;
