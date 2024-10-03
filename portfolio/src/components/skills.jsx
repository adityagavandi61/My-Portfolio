import React from "react";
import Python from "../../public/assets/image-skills/python.gif";
import Git from "../../public/assets/image-skills/git.gif";
import JavaScript from "../../public/assets/image-skills/javascript.gif";
import html from "../../public/assets/image-skills/html.gif";
import api from "../../public/assets/image-skills/api.gif";
import css from "../../public/assets/image-skills/css.gif";
import NodeJs from "../../public/assets/image-skills/nodejs.gif";
import ReactJs from "../../public/assets/image-skills/reactjs.gif";
import Tailwind from "../../public/assets/image-skills/tailwindcss.gif";
import sql from "../../public/assets/image-skills/sql.gif";
import Mongodb from "../../public/assets/image-skills/mongodb.gif";

function skills() {
  const skill = [
    {
      id: 1,
      name: "Python",
      img: Python,
    },
    {
      id: 2,
      name: "Git",
      img: Git,
    },
    {
      id: 3,
      name: "HTML",
      img: html,
    },
    {
      id: 4,
      name: "JavaScript",
      img: JavaScript,
    },
    {
      id: 5,
      name: "API",
      img: api,
    },
    {
      id: 6,
      name: "CSS",
      img: css,
    },
    {
      id: 7,
      name: "NodeJs",
      img: NodeJs,
    },
    {
      id: 8,
      name: "ReactJs",
      img: ReactJs,
    },
    {
      id: 9,
      name: "Tailwind",
      img: Tailwind,
    },
    {
      id: 10,
      name: "SQL",
      img: sql,
    },
    {
      id: 11,
      name: "MongoDB",
      img: Mongodb,
    },
  ];
  return (
    <>
    <div className="skills-container flex flex-row w-full flex-nowrap h-20 overflow-hidden">   
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
        {skill.map((item) => (
          <li className="skill-card" key={item.id}>
            <img src={item.img} alt={item.name} className="skills-img h-20" />
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default skills;
