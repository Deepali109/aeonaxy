import React from "react";
import img1 from "../images/page2.1.png";
import img2 from "../images/page2.2.png";
import img3 from "../images/page2.3.png";
import img4 from "../images/page2.4.png";
import img5 from "../images/page2.5.png";
function Step2() {
  return (
    <div>
      <h3 className="text-xl font-bold text-center p-4">
        Which are you most interested in?
      </h3>
      <h5 className="text-xs text-center text-gray-700">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </h5>

      <div className="flex flex-col p-5 w-full justify-center items-center ">
        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100 hover:border-yellow-300">
          <img src={img1} className="h-8 w-8"></img>
          <h4 className="text-sm text-gray-600 pl-3">
            Learning specific skills to advance my career
          </h4>
        </div>

        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100  hover:border-yellow-300">
          <img src={img2} className="h-8"></img>
          <h4 className="text-sm text-gray-600 pl-3">
            Exploring new topics I'm interested in
          </h4>
        </div>

        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100  hover:border-yellow-300">
          <img src={img3} className="h-8"></img>
          <h4 className="text-sm text-gray-600 pl-3">
            Refreshing my math foundations
          </h4>
        </div>
        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100  hover:border-yellow-300">
          <img src={img4} className="h-8"></img>
          <h4 className="text-sm text-gray-600 pl-3">
            Exercising my brain to stay sharp
          </h4>
        </div>

        <div className="flex flex-row shadow-sm p-2 m-1 w-2/3 items-center border border-gray-100  hover:border-yellow-300">
          <img src={img5} className="h-8"></img>
          <h4 className="text-sm text-gray-600 pl-3">Something else</h4>
        </div>
      </div>
    </div>
  );
}

export default Step2;
