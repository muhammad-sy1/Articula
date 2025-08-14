import React, { useState } from "react";
import RegisterNav from "../website-component/RegisterNav";
import { Checkbox, Field, Label } from "@headlessui/react";
import OtherAuthentication from "../website-component/OtherAuthentication";
import { useNavigate } from "react-router";

import { AlertCircleIcon } from "lucide-react";
import { Alert } from "../components/ui/alert";

const SignIn = () => {
  const [enabled, setEnabled] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  // const [isInitializing, setIsInitializing] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [curr_id, setCurr_id] = useState("");
  const [curr_username, setCurr_username] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const { currUsername } = useContext(UserCtx)

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
            throw new Error(errData.message);
          }); // Because response on credentials fails is type of json

          // throw new Error(`${response.status} - ${JSON.stringify(response.statusText)} - something went wrong`)
          // RESPONSE TEXT WHEN API RETURN TEXT
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem(
          "credentials",
          btoa(formData.username + ":" + formData.password)
        );
        console.log(data);

        localStorage.setItem("csrf_token", data.csrf_token);
        // localStorage.setItem("logout_token", data.logout_token);

        localStorage.setItem("userId", data.current_user.uid);
        // setCurr_id(data.current_user.uid);

        localStorage.setItem("username", data.current_user.name);
        setCurr_username(data.current_user.name);
        console.log(curr_username);

        // setIsAuthenticated(true);
        navigate("/home/homepage");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      })
      .finally(() => {
        console.log("finally");
        setIsLoading(false);
      });
  };

  return (
    <>
      <RegisterNav
        accountStatus={{
          status: "Don’t have account?",
          buttonContent: "Create Account",
          path: "/home/create-account",
        }}
      />
      <div className="relative">
        <div className="fixed lg:block hidden bg-secondary-100 bottom-0 top-0 -z-50 start-0 end-1/2">
          <div className="h-full pt-[76px] px-5 flex justify-center items-end">
            <img src="/sign-in.png" alt="" className="scale-75" />
          </div>
        </div>
        <div className="flex lg:justify-end justify-center">
          <div className="lg:w-1/2 md:w-3/5 sm:w-4/5 w-full pt-[76px]">
            <div className="py-10 px-5 flex flex-col items-center gap-4">
              <div className="font-semibold text-4xl text-center">
                Sign in to your account
              </div>
              <form
                action=""
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-5 xl:w-5/6 w-full"
              >
                <span className="flex flex-col gap-2">
                  <span className="text-sm">Username</span>
                  <input
                    disabled={isLoading}
                    required
                    className=""
                    type="text"
                    name=""
                    id="email"
                    placeholder="your user name"
                    value={formData.username}
                    onInput={(e) => {
                      setFormData({
                        ...formData,
                        username: e.target.value,
                      });
                    }}
                  />
                </span>
                <span className="flex flex-col grow gap-2">
                  <span className="text-sm">Password</span>
                  <input
                    className=""
                    type="password"
                    name=""
                    id="password"
                    placeholder="********"
                    value={formData.password}
                    onInput={(e) => {
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      });
                    }}
                  />
                </span>
                <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4 justify-between">
                  <Field className="flex text-sm items-center gap-2">
                    <Checkbox
                      checked={enabled}
                      onChange={setEnabled}
                      className="group size-6 border border-gray-100 p-1 focus:not-data-focus:outline-none data-checked:bg-black data-focus:outline data-focus:outline-offset-2 data-focus:outline-white"
                    >
                      <svg
                        className="stroke-white opacity-0 group-data-checked:opacity-100 cursor-pointer"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Checkbox>
                    <Label className="flex! gap-2">
                      <span className="text-gray-600">Remember me</span>
                    </Label>
                  </Field>
                  <button
                    // onClick={() => {
                    //   isAuthenticated ?  : "";
                    // }}
                    className="primary-btn"
                  >
                    Sign In
                  </button>
                </div>
                <div className="grid w-full max-w-xl items-start gap-4">
                  {error ? (
                    <Alert className="border-none ps-0" variant="destructive">
                      <AlertCircleIcon />
                      <AlertTitle className="text-danger-500">
                        The username or password you entered is incorrect.
                      </AlertTitle>
                    </Alert>
                  ) : (
                    ""
                  )}
                </div>
              </form>
              <OtherAuthentication />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
