import { useState } from "react";

const Grid = () => {
  return (
    <div>
      <div className="m-4 grid sm:grid-cols-3 gap-3">
        <div className="bg-orange-500 min-h-[100px] rounded-lg shadow"></div>
        <div className="bg-teal-500 min-h-[100px] rounded-lg shadow"></div>
        <div className="bg-red-500 min-h-[100px] rounded-lg shadow"></div>
      </div>
      <div className="m-4 grid sm:grid-cols-12 gap-3">
        <div className="bg-orange-500 min-h-[100px] rounded-lg shadow sm:col-span-2"></div>
        <div className="bg-teal-500 min-h-[100px] rounded-lg shadow sm:col-span-8"></div>
        <div className="bg-red-500 min-h-[100px] rounded-lg shadow sm:col-span-2"></div>
      </div>
      <div className="m-4 grid sm:grid-cols-12 gap-3">
        <div className="bg-orange-500 min-h-[100px] rounded-lg shadow sm:col-span-2"></div>
        <div className="bg-teal-500 min-h-[100px] rounded-lg shadow sm:col-span-10"></div>
      </div>
    </div>
  );
};

export default Grid;
