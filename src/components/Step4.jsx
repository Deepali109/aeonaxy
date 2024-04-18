import React from "react";

function Step4() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold text-center p-4">
        What is your math comfort level?
      </h3>
      <h5 className="text-xs text-center text-gray-700">
        Choose the highest level you feel confident in - you can always adjust
        later.
      </h5>

      <div className="flex flex-wrap flex-row item-center justify-center gap-2 w-2/3 p-5 mt-5 sm:flex-wrap">
        <div className="border border-gray-300 w-32 sm:w-40 h-40 flex flex-col justify-center items-center rounded-md hover:border-yellow-500 hover:shadow-md shadow-yellow-700">
          <h2 className="text-xl font-serif sm:text-md">5 + 4/2 = ?</h2>
          <h3 className="text-sm font-semibold mt-5">Arithmetic</h3>
          <h3 className="text-sm text-gray-500 mt-1">Introductory</h3>
        </div>

        <div className="border border-gray-300 w-32 sm:w-40 h-40 flex flex-col justify-center items-center rounded-md hover:border-yellow-500 hover:shadow-md shadow-yellow-700">
          <h2 className="text-xl font-serif">3x + 5 = 4</h2>
          <h3 className="text-sm font-semibold mt-5">Basic Alzebra</h3>
          <h3 className="text-sm text-gray-500 mt-1">Foundational</h3>
        </div>

        <div className="border border-gray-300 w-32 sm:w-40 h-40 flex flex-col justify-center items-center rounded-md hover:border-yellow-500 hover:shadow-md shadow-yellow-700">
          <h2 className="text-xl font-serif">x^2-8x-2=?</h2>
          <h3 className="text-sm font-semibold mt-5">Intermediate Algebra</h3>
          <h3 className="text-sm text-gray-500 mt-1">Intermediate</h3>
        </div>

        <div className="border border-gray-300 w-32 sm:w-40 h-40 flex flex-col justify-center items-center rounded-md hover:border-yellow-500 hover:shadow-md shadow-yellow-700">
          <h2 className="text-xl font-serif">5 + 4/2 = ?</h2>
          <h3 className="text-sm font-semibold mt-5">Calculus</h3>
          <h3 className="text-sm text-gray-500 mt-1">Advanced</h3>
        </div>
      </div>
    </div>
  );
}

export default Step4;
