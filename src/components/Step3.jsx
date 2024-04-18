import React from "react";
import img1 from "../images/page3.png";

function Step3() {
  return (
    <div className="flex flex-col p-5 w-full sm:flex-row">
      <img src={img1} className="sm:w-3/6"></img>
      <div className=" sm:w-3/6  ">
        <h2 className="text-xl font-bold mt-20">You're in the right place</h2>
        <h4 className="text-sm text-gray-700 flex-wrap w-2/3 mt-2">
          Brilliant gets you hands-on to help improve your professional skills
          and knowledge. You'll interact with concepts and solve fun problems in
          math, science, and computer science.
        </h4>
      </div>
    </div>
  );
}

export default Step3;
