import React, { useState } from "react";
import { NavLink } from "react-router";
import Brand from "../website-component/Brand";

import { LuPanelLeftClose } from "react-icons/lu";
import { LuPanelRightClose } from "react-icons/lu";
import { GrAppsRounded } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";

const DashboardNavbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav
      className={`flex flex-col grow justify-between dash-nav p-2 transition-all ease-out duration-500 h-screen bg-gray-50 ${
        open ? "w-[400px]" : "w-[55px]"
      }`}
    >
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between items-center ">
          <div
            className={`flex items-center w-full ${
              open ? "justify-between p-2" : "justify-center"
            }`}
          >
            {open ? (
              <Brand className="w-28" fill={"#000000"} />
            ) : (
              <img className="w-7 h-7 " src="/Favicon.svg" alt="" />
            )}
            <button
              className={`${open ? "" : "hidden"} hover:bg-gray-100 rounded-sm p-1!`}
              onClick={() => {
                setOpen(false);
              }}
            >
              <LuPanelLeftClose className="text-2xl" />
            </button>
          </div>
        </div>
        <Tooltip open={!open ? undefined : false}>
          <TooltipTrigger asChild>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className={`p-2! rounded-sm hover:bg-gray-100 flex justify-center ${open ? "hidden" : ""}`}
            >
              <LuPanelRightClose className="text-2xl" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <div>Open</div>
          </TooltipContent>
        </Tooltip>

        <div className=" flex flex-col gap-y-4">
          <Tooltip open={!open ? undefined : false}>
            <TooltipTrigger asChild>
              <NavLink
                to="/dashboard/home"
                className={`p-2 flex items-center gap-2 rounded-sm ${
                  open ? "" : " justify-center"
                } `}
              >
                <GrAppsRounded className="text-2xl" />
                <span className={`${open ? "" : "hidden"}`}>Dashboard</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="left">
              <div>Dashboard</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip open={!open ? undefined : false}>
            <TooltipTrigger asChild>
              <NavLink
                to="/dashboard/reports"
                className={`p-2 flex items-center gap-2 rounded-sm ${
                  open ? "" : "justify-center"
                } `}
              >
                <TbReportAnalytics className="text-2xl" />
                <span className={`${open ? "" : "hidden"}`}>Reports</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="left">
              <div>Reports</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip open={!open ? undefined : false}>
            <TooltipTrigger asChild>
              <NavLink
                to="/dashboard/settings"
                className={`p-2 flex items-center gap-2 rounded-sm ${
                  open ? "" : "justify-center"
                } `}
              >
                <IoSettingsOutline className="text-2xl" />
                <span className={`${open ? "" : "hidden"}`}>Settings</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="left">
              <div>Settings</div>
            </TooltipContent>
          </Tooltip>
          <Tooltip open={!open ? undefined : false}>
            <TooltipTrigger asChild>
              <NavLink
                to="/home/homepage"
                className={`p-2 flex items-center gap-2 rounded-sm ${
                  open ? "" : "justify-center"
                } `}
              >
                <FiHome className="text-2xl" />
                <span className={`${open ? "" : "hidden"}`}>Home</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="left">
              <div>Home</div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <Tooltip open={!open ? undefined : false}>
          <TooltipTrigger asChild>
            <NavLink
              to="/dashboard/help"
              className={`p-2 flex items-center gap-2 rounded-sm ${
                open ? "" : "justify-center"
              } `}
            >
              <IoIosHelpCircleOutline className="text-2xl" />
              <span className={`${open ? "" : "hidden"}`}>Help</span>
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Help</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip open={!open ? undefined : false}>
          <TooltipTrigger asChild>
            <button
              onClick={() => {
                localStorage.removeItem("csrf_token");
                window.location.reload();
              }}
              className={`p-2! flex items-center gap-2 w-full ${
                open ? "" : "justify-center"
              } `}
            >
              <IoIosLogOut className="text-2xl" />
              <span className={`${open ? "" : "hidden"}`}>Log out</span>
            </button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Log out</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
