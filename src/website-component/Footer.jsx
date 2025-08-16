import React from "react";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Brand from "./Brand";
import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-900 text-white py-10 border-b  border-gray-50/15">
        <div className="container mx-auto  lg:px-10 px-4">
          <div className="grid lg:grid-cols-11 grid-cols-12 lg:gap-4 gap-8">
            <div className="lg:col-span-3 md:col-span-4 col-span-12 lg:order-1 order-1 md:order-first">
              <div className="flex flex-col gap-3">
                <NavLink to="/">
                  <Brand className="md:w-36 w-30" fill={"#FFFFFF"} />
                </NavLink>
                <span className="text-gray-500 text-sm w-4/5">
                  Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
                  Donec mattis odio at.
                </span>
                <div className="flex gap-x-3">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="text-lg w-11 h-11 flex justify-center items-center hover:bg-primary-500 hover:shadow-(--shadow-primary-600) bg-[#363B4766]"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="text-lg w-11 h-11 flex justify-center items-center hover:bg-primary-500 hover:shadow-(--shadow-primary-600) bg-[#363B4766]"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="text-lg w-11 h-11 flex justify-center items-center hover:bg-primary-500 hover:shadow-(--shadow-primary-600) bg-[#363B4766]"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://x.com/home"
                    target="_blank"
                    className="text-lg w-11 h-11 flex justify-center items-center hover:bg-primary-500 hover:shadow-(--shadow-primary-600) bg-[#363B4766]"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 lg:order-1 order-1 md:order-1">
              <div className="flex flex-col gap-4">
                <div className="font-medium text-sm uppercase">
                  Top 4 Category
                </div>
                <ul className="text-sm text-gray-500 flex flex-col gap-3">
                  <li>
                    <a href="#">
                      Development
                      <GoArrowRight />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Finance & Accounting
                      <GoArrowRight />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Design
                      <GoArrowRight />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Business
                      <GoArrowRight />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 lg:order-1 order-1 md:order-2">
              <div className="flex flex-col gap-4">
                <div className="font-medium text-sm uppercase">Quick Links</div>
                <ul className="text-sm text-gray-500 flex flex-col gap-3">
                  <li>
                    <NavLink to="/about">
                      About
                      <GoArrowRight />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">
                      Contact
                      <GoArrowRight />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/jobs">
                      Jobs
                      <GoArrowRight />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/articles">
                      Articles
                      <GoArrowRight />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 lg:order-1 order-1 md:order-4">
              <div className="flex flex-col gap-4">
                <div className="font-medium text-sm uppercase">
                  Top 4 Category
                </div>
                <ul className="text-sm text-gray-500 flex flex-col gap-3">
                  <li>
                    <a href="#">
                      Help Center
                      <GoArrowRight />
                    </a>
                  </li>
                  <li>
                    <NavLink to="/faqs">
                      FAQs
                      <GoArrowRight />
                    </NavLink>
                  </li>
                  <li>
                    <a href="#">
                      Terms & Condition
                      <GoArrowRight />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Privacy Policy
                      <GoArrowRight />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 lg:order-1 order-1 md:order-3">
              <div className="flex flex-col gap-4">
                <div className="font-medium text-sm uppercase">
                  Downlaod our app
                </div>
                <div className="grid grid-cols-2 w-full gap-3">
                  <div className=" col-span-2">
                    <a
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      className="w-40 h-14 hover:bg-gray-800/70 bg-gray-800/40 px-5 py-3.5 flex items-center justify-between"
                    >
                      <FaApple className="text-3xl" />
                      <span className="flex flex-col gap-0.5">
                        <span className="text-[10px] text-gray-500">
                          Download now
                        </span>
                        <span className="font-medium">App Store</span>
                      </span>
                    </a>
                  </div>
                  <div className=" col-span-2">
                    <a
                      href="https://play.google.com/store/games"
                      target="_blank"
                      className="w-40 h-14 hover:bg-gray-800/70 bg-gray-800/40 px-5 py-3.5 flex items-center justify-between"
                    >
                      <FaGooglePlay className="text-3xl" />
                      <span className="flex flex-col gap-0.5">
                        <span className="text-[10px] text-gray-500">
                          Download now
                        </span>
                        <span className="font-medium">Play Store</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-6 border-b border-gray-50/15">
        <div className="container mx-auto lg:px-8 px-4">
          <div className="px-14 flex text-sm text-gray-500 justify-center items-center">
            © 2025 - All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
