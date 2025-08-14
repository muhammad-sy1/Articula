import React from "react";
import { NavLink } from "react-router";

const Breadcrumb = ({ currentPage }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-1 py-3 bg-gray-50">
        <div className="text-2xl font-semibold">{currentPage}</div>
        <div className="text-sm flex gap-x-1.5">
          <NavLink className="text-gray-500 hover:text-gray-900 transition-colors" to="/home/homepage">
            Home
          </NavLink>
          /
          <div className="" >
            {currentPage}
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
