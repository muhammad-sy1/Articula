import React from "react";
import { NavLink } from "react-router";

const Error404 = () => {
  return (
    <>
      <div className="container mx-auto lg:px-10 px-4">
        <div className="flex gap-x-20 lg:flex-row flex-col justify-center items-center">
          <div className="flex py-10 lg:order-first order-last lg:w-1/2 lg:h-lvh flex-col justify-center items-start gap-4">
            <div className="text-7xl text-gray-100 font-medium">Error 404</div>
            <div className="xl:text-5xl text-4xl font-medium">Oops! page not found</div>
            <div className="text-gray-700 text-xl w-4/5">
              Something went wrong. It’s look that your requested could not be
              found. It's look like the link is broken or the page is removed.
            </div>
            <NavLink to="/home/homepage" className="primary-btn">
              Go back
            </NavLink>
          </div>
          <div className="flex py-10 lg:w-1/2 lg:h-lvh justify-center items-center">
            <img src="/error404.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
