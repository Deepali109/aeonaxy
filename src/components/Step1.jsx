import React from "react";
import img1 from "../images/page1.1.png";
import img2 from "../images/page1.2.png";
import img3 from "../images/page1.3.png";
import img4 from "../images/page1.4.png";
import img5 from "../images/page1.5.png";

function Step1() {
  return (
    <div>
      <h3 className="text-xl font-bold text-center p-4">
        Which describes you best?
      </h3>
      <h5 className="text-xs text-center text-gray-700">
        This will help us personalize your experience.
      </h5>

      <div className="flex flex-col p-5 w-full justify-center items-center ">
        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100  hover:border-yellow-300">
          <img src={img1} className="h-10"></img>
          <h4 className="text-sm text-gray-600 pl-3">
            <span className="font-semibold text-gray-900">Student</span> or soon
            to be enrolled
          </h4>
        </div>

        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100  hover:border-yellow-300">
          <img src={img2} className="h-10"></img>
          <h4 className="text-sm text-gray-600 pl-3">
            <span className="font-semibold text-gray-900">Professional</span>{" "}
            pursuing a career
          </h4>
        </div>

        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100  hover:border-yellow-300">
          <img src={img3} className="h-10"></img>
          <h4 className="text-sm text-gray-600 pl-3">
            <span className="font-semibold text-gray-900">Parent</span> of a
            school-age child
          </h4>
        </div>
        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100  hover:border-yellow-300">
          <img src={img4} className="h-10"></img>
          <h4 className="text-sm text-gray-600 pl-3">
            <span className="font-semibold text-gray-900">
              Lifelong learner
            </span>
          </h4>
        </div>

        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100  hover:border-yellow-300">
          <img src={img5} className="h-10"></img>
          <h4 className="text-sm text-gray-600 pl-3">
            <span className="font-semibold text-gray-900">Teacher</span>
          </h4>
        </div>

        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100  hover:border-yellow-300">
          <img src={img4} className="h-10"></img>
          <h4 className="text-sm text-gray-600 pl-3">
            <span className="font-semibold text-gray-900">Other</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Step1;
