import React from "react";
import img1 from "../images/page6.png";
function Last() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center p-4 mt-10">
        Learning paths based on your answers
      </h3>
      <h5 className="text-sm text-center text-gray-700">
        Choose one to get started. You can switch anythime .
      </h5>
      <div className="flex items-center justify-center flex-col gap-2 sm:flex-row mt-8">
        <div className="flex w-[350px] h-[150px] border border-gray-200 shadow-sm items-center justify-evenly p-2">
          <h3 className="text-sm text-gray-700 font-semibold">
            <span className="text-sm font-bold">Foundational Math</span> Build
            your Foundational skills in algebra, geometry, and probability.
          </h3>
          <img src={img1} className="w-1/3"></img>
        </div>

        <div className="flex w-[350px] h-[150px]  border border-gray-200 shadow-sm items-center justify-evenly p-4">
          <h3 className="text-sm text-gray-700 font-semibold">
            <span className="text-sm font-bold">Mathematical Thinking</span>{" "}
            Build your Foundational skills in algebra, geometry, and
            probability.
          </h3>
          <img src={img1} className="w-1/3"></img>
        </div>
      </div>
    </div>
  );
}

export default Last;
