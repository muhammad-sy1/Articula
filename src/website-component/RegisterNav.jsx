import React from "react";
import { NavLink } from "react-router";
import Brand from "./Brand";

const RegisterNav = ({ accountStatus }) => {
  const { status, buttonContent, path } = accountStatus;
  // const location = useLocation();
  // const isSignInPage =
  //   location.pathname === "/home/sign-in" ||
  //   location.pathname === "/home/create-account";
  return (
    <>
      <div className=" border-b border-gray-100 fixed inset-x-0 z-50 bg-white py-1.5">
        <div className="container mx-auto lg:px-8 px-4">
          <nav className="flex items-center justify-between py-2">
            <div className="brand">
              <NavLink to="/home/homepage">
                <span className="flex">
                  <Brand className="md:w-40 w-30" fill={"#000000"} />
                </span>
              </NavLink>
            </div>
            <div className="flex create-sign-buttons">
              {/* {location.pathname !== "/home/create-account" && ( */}
              <div className="flex items-center">
                {/* {isSignInPage && ( */}
                <div className="sm:me-4 me-2 sm:flex hidden text-sm text-gray-700">
                  {status}
                </div>
                {/* )} */}
                <NavLink to={path}>
                  <span className="ms-1 lite-primary-btn">{buttonContent}</span>
                </NavLink>
              </div>
              {/* {location.pathname !== "/home/sign-in" && (
                <div className="flex items-center ms-4">
                  {isSignInPage && (
                    <div className="sm:me-4 me-2 sm:flex hidden text-sm text-(--gray-700)">
                      Already have an account?
                    </div>
                  )}
                  <NavLink to="/home/sign-in">
                    <span className="lite-primary-btn">Sign In</span>
                  </NavLink>
                </div>
              )} */}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default RegisterNav;
