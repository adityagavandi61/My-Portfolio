import React from "react";
import Boy from "../../public/assets/boy.png";
import SkillButtons from "./skillsbutton";
function about() {
  return (
    <>
      <div className="about-container min-h-screen felx mt-3 pb-11">
        <div className="abouts flex flex-col p-16" id="about">
          <h1 className="text-center text-3xl">
            <b>About</b>
          </h1>
          <div className="info flex justify-center items-center gap-8 pt-4">
            <img
              src={Boy}
              alt="protrait"
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
            />
            <p className="w-80 h-80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              corrupti similique consectetur fugit,expedita commodi? Assumenda
              corrupti soluta nemo laborum?
            </p>
          </div>
          <h1 className="text-center text-3xl pt-10">
            <b>My Technical Skills</b>
          </h1>
          <div className="info flex justify-center flex-wrap gap-8 pt-10 px-11">
            <SkillButtons />
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
