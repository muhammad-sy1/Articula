import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Brand from "./Brand";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import UsernameContext from "../context/UsernameContext";

const Navbar = () => {
  const { username } = useContext(UsernameContext);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSideMenu = () => {
    document.getElementById("sideMenu").classList.toggle("-left-full");
    document.getElementById("sideMenu").classList.toggle("left-0");
    document.getElementById("coloredLayer").classList.toggle("inset-0");
  };


  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const status = localStorage.getItem("csrf_token");
    if (status) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, []);

  return (
    <>
      <div className="h-[100px]">
        <header
          className={`w-full top-0 left-0 z-40 bg-white transition  ${
            isFixed ? "fixed shadow-md top-0" : "absolute"
          }`}
        >
          <div
            className={`bg-gray-900 ${isFixed ? "hidden" : ""}`}
            id="dark-nav"
          >
            <div className="container mx-auto lg:px-10 px-4">
              <nav
                className="main-nav items-center justify-between lg:flex hidden py-2"
                aria-label="Global"
              >
                <div className="hidden nav-links text-gray-300 text-sm font-medium lg:flex lg:gap-x-5">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/articles">Articles</NavLink>
                  <NavLink to="/jobs">Jobs</NavLink>
                  <NavLink to="/about">About Us</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                  <NavLink to="/faqs">FAQs</NavLink>
                </div>
                <div className="hidden social-links gap-1 lg:flex lg:flex-1 items-center lg:justify-end">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="text-xl px-2 hover:text-primary-600 text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="text-xl px-2 hover:text-primary-600 text-white"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="text-xl px-2 hover:text-primary-600 text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://x.com/home"
                    target="_blank"
                    className="text-xl px-2 hover:text-primary-600 text-white"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="lg:hidden " id="" role="dialog" aria-modal="true">
            <div
              onClick={handleSideMenu}
              className="fixed z-10 bg-gray-900/50"
              id="coloredLayer"
            ></div>
            <div
              id="sideMenu"
              className="fixed z-50 transition-[left] duration-500! ease-in-out! bg-gray-900 inset-y-0 -left-full w-[300px] overflow-y-auto px-6 py-6 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <NavLink to="/" onClick={handleSideMenu}>
                      <img src="/Favicon.svg" className="w-10" alt="" />
                    </NavLink>
                    <button
                      type="button"
                      // id='hamburgerButton'
                      onClick={handleSideMenu}
                      className="-m-2.5 hover:rotate-90 text-2xl transition cursor-pointer rounded-md p-2.5 text-(--gray-100)"
                    >
                      <IoMdClose className="" />
                    </button>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                      <NavLink to="/" onClick={handleSideMenu}>
                        <span className="text-sm/6 font-medium hover:bg-(--gray-50)/5 p-3 w-full hover:text-white text-gray-500">
                          Home
                        </span>
                      </NavLink>
                      <NavLink to="/articles" onClick={handleSideMenu}>
                        <span className="text-sm/6 font-medium hover:bg-(--gray-50)/5 p-3 w-full hover:text-white text-gray-500">
                          Articles
                        </span>
                      </NavLink>
                      <NavLink to="/jobs" onClick={handleSideMenu}>
                        <span className="text-sm/6 font-medium hover:bg-(--gray-50)/5 p-3 w-full hover:text-white text-gray-500">
                          Jobs
                        </span>
                      </NavLink>
                      <NavLink to="/about" onClick={handleSideMenu}>
                        <span className="text-sm/6 font-medium hover:bg-(--gray-50)/5 p-3 w-full hover:text-white text-gray-500">
                          About Us
                        </span>
                      </NavLink>
                      <NavLink to="/contact" onClick={handleSideMenu}>
                        <span className="text-sm/6 font-medium hover:bg-(--gray-50)/5 p-3 w-full hover:text-white text-gray-500">
                          Contact
                        </span>
                      </NavLink>
                      <NavLink to="/faqs" onClick={handleSideMenu}>
                        <span className="text-sm/6 font-medium hover:bg-(--gray-50)/5 p-3 w-full hover:text-white text-gray-500">
                          FAQs
                        </span>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="social-links gap-3 flex items-center">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="text-xl px-2 hover:text-primary-600 text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="text-xl px-2 hover:text-primary-600 text-white"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="text-xl px-2 hover:text-primary-600 text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://x.com/home"
                    target="_blank"
                    className="text-xl px-2 hover:text-primary-600 text-white"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-b border-gray-100 py-1.5">
            <div className="container mx-auto lg:px-10 px-4">
              <nav className="flex items-center justify-between py-2">
                <div className="flex lg:hidden me-1">
                  <button
                    type="button"
                    onClick={handleSideMenu}
                    className=" cursor-pointer inline-flex items-center justify-center rounded-md text-black"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
                <div className="brand">
                  <NavLink to="/">
                    <span className="flex">
                      <Brand className="md:w-36 w-30" fill={"#000000"} />
                    </span>
                  </NavLink>
                </div>
                <div
                  className={`nav-links hidden white-bg-nav text-sm font-medium lg:gap-x-5 ${
                    isFixed ? "lg:flex" : ""
                  }`}
                >
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/articles">Articles</NavLink>
                  <NavLink to="/jobs">Jobs</NavLink>
                  <NavLink to="/about">About Us</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                  <NavLink to="/faqs">FAQs</NavLink>
                </div>
                {isLoggedIn ? (
                  <div className="">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-x-4 cursor-pointer outline-0 border-0">
                          <div className="font-medium text-sm text-gray-700">
                            {username}
                          </div>
                          <div className="size-10 rounded-full overflow-hidden">
                            <img
                              src="/y-person.jpg"
                              alt=""
                              className="size-10 object-cover object-center"
                            />
                          </div>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuGroup>
                          <DropdownMenuItem className="px-1 py-0">
                            <NavLink className="flex w-full px-2 py-2 " to="/my-account">
                              My Account
                            </NavLink>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="px-1 py-0">
                            <NavLink className="flex w-full px-2 py-2" to="/my-articles">
                              My Articles
                            </NavLink>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="px-1 py-0">
                            <NavLink
                              onClick={() => {
                                localStorage.removeItem("csrf_token");
                                localStorage.removeItem("credentials");
                                window.location.reload();
                              }}
                              className="flex w-full px-2 py-2"
                              to="/"
                            >
                              Log Out
                            </NavLink>
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <div className="flex gap-x-4">
                    <div className="flex items-center">
                      <NavLink to="/create-account">
                        <span className="ms-1 transition-all duration-200 ease-linear lg:text-base text-sm hover:bg-primary-200 bg-primary-100 hover:text-primary-600 text-primary-500 font-semibold md:px-4 px-2 py-2 lg:px-6 lg:py-2">
                          Create Account
                        </span>
                      </NavLink>
                    </div>
                    <div className="flex items-center">
                      <NavLink to="/sign-in">
                        <span className="transition-all duration-200 ease-linear lg:text-base text-sm hover:bg-primary-600 hover:shadow-(--shadow-primary-600) bg-primary-500 text-white font-semibold md:px-4 px-2 py-2 lg:px-6 lg:py-2">
                          Sign In
                        </span>
                      </NavLink>
                    </div>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
