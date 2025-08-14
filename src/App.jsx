import { Routes, Route } from "react-router";
import "./App.css";
// import MyDashboard from "./dashboard-routes/MyDashboard";
import MainPage from "./website-routes/MainPage";
import DashboardLogIn from "./dashboard-routes/dashboardLogIn";
// import { useEffect, useState } from "react";

function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   useEffect(() => {
//     document.body.className = isDarkMode ? "dark" : "light";
//   }, [isDarkMode]);

  return (
    <>
      <div>
        <Routes>
          <Route>
            <Route path="home/*" element={<MainPage />} />
            <Route path="dashboard/*" element={<DashboardLogIn />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
