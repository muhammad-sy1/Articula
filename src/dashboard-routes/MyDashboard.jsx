import React from "react";
import { Routes, Route } from "react-router";

import Reports from "./Reports";
import Messages from "./Messages";
import Settings from "./Settings";
import Help from "./Help";
import DashboardHome from "./DashboardHome";
import DashboardNavbar from "./DashboardNavbar";
const MyDashboard = () => {
  return (
    <>
      <div className="relative">
        <div className="flex">
          <DashboardNavbar />
          <div className="flex flex-col w-full items-center justify-center font-bold text-5xl overflow-auto">
            <Routes>
              <Route path="home" element={<DashboardHome />} />
              <Route path="reports" element={<Reports />} />
              <Route path="messages" element={<Messages />} />
              <Route path="settings" element={<Settings />} />
              <Route path="help" element={<Help />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDashboard;
