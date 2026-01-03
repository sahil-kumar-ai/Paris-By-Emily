import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";
import Project7 from "./Project7";

const Project = () => {
  return (
    <div className="relative top-30">
      <div className="">
        <div className="flex justify-center">
          <hr className="w-[93vw]" />
        </div>

        <div>
          <Project1 />
        </div>

        <div className="flex justify-center">
          <hr className="w-[93vw]" />
        </div>

        <div>
          <Project2 />
        </div>

        <div className="flex justify-center">
          <hr className="w-[93vw]" />
        </div>

        <div>
          <Project3 />
        </div>

        <div className="flex justify-center">
          <hr className="w-[93vw]" />
        </div>

        <Project4 />

        <div className="flex justify-center">
          <hr className="w-[93vw]" />
        </div>

        <Project5 />

        <div className="flex justify-center">
          <hr className="w-[93vw]" />
        </div>

        <Project6 />

        <div className="flex justify-center">
          <hr className="w-[93vw]" />
        </div>

        <Project7 />

        <div className="flex justify-center">
          <hr className="w-[93vw]" />
        </div>
      </div>
    </div>
  );
};

export default Project;
