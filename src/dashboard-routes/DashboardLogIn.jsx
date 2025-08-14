/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import MyDashboard from "./MyDashboard";

const DashboardLogIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isInitializing, setIsInitializing] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [curr_id, setCurr_id] = useState("");
  const [curr_username, setCurr_username] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`https://tamkeen-dev.com/api/user/login?_format=json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.username,
        pass: formData.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errData) => {
            throw new Error(errData.message || "LOGIN FAILED");
          });
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);

        localStorage.setItem("csrf_token", data.csrf_token);
        localStorage.setItem("logout_token", data.logout_token);

        localStorage.setItem("uid", data.current_user.uid);
        setCurr_id(data.current_user.uid);

        localStorage.setItem("name", data.current_user.name);
        setCurr_username(data.current_user.name);

        setIsAuthenticated(true);
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
      })
      .finally(() => {
        // console.log("finally");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const getCsrfToken = localStorage.getItem("csrf_token");
    const getLogoutToken = localStorage.getItem("logout_token");
    const getUid = localStorage.getItem("uid");
    const getName = localStorage.getItem("name");

    if (getCsrfToken && getLogoutToken) {
      setIsAuthenticated(true);
      setCurr_id(getUid);
      setCurr_username(getName);
    }

    setIsInitializing(false);
  }, []);

  if (isInitializing) {
    return <div></div>;
  }

  if (isAuthenticated) {
    return (
      <>
        <MyDashboard />
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto lg:px-10 px-4">
        <div className="flex flex-col justify-center items-center gap-y-4 h-screen w-full">
          <div className="font-semibold text-lg">Login To Dashboard</div>
          <form
            className="w-sm flex flex-col gap-y-5"
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col gap-y-1">
              <label htmlFor="">Username</label>
              <input
                disabled={isLoading}
                required
                type="text"
                name=""
                id="sf"
                placeholder="your user name"
                value={formData.username}
                onInput={(e) => {
                  setFormData({
                    ...formData,
                    username: e.target.value,
                  });
                }}
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="">Password</label>
              <input
                disabled={isLoading}
                required
                type="password"
                name=""
                id="df"
                placeholder="********"
                value={formData.password}
                onInput={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
              />
            </div>

            {error ? <div className="text-primary-300">{error}</div> : ""}

            <div className="">
              <button
                className="primary-btn w-full"
                disabled={
                  isLoading ||
                  formData.password.length < 6 ||
                  formData.username.length < 3
                }
              >
                {isLoading ? <i>Logging in...</i> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DashboardLogIn;
