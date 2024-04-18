import React from "react";
import img1 from "../images/page5.png";
import img2 from "../images/page5.2.png";
function Step5() {
  return (
    <div className="flex items-center justify-evenly p-5 ml w-full">
      <img src={img1} className=" mt-20 w-32 sm:w-40 h-56 sm:h-64"></img>
      <div className="w-3/6 ">
        <h2 className="text-2xl font-bold mt-20">You're on your way!</h2>
        <img src={img2} className="w-1/4 mt-4"></img>
        <h4 className="text-sm text-gray-700 flex-wrap mt-2 font-semibold">
          "Through its engaging and well-structured courses, Brilliant has
          taught me mathematical concepts that I previously struggled to
          understand. I now feel confident approaching both technical job
          interviews and real world problem solving situations"
        </h4>
        <p className="text-sm mt-5">-Jacob S.</p>
      </div>
    </div>
  );
}

export default Step5;
