import React, { useState } from "react";
import { Checkbox, Field, Label } from "@headlessui/react";
import OtherAuthentication from "../website-component/OtherAuthentication";
import RegisterNav from "../website-component/RegisterNav";

import { MailIcon } from "lucide-react";

const CreateAccount = () => {
  const [enabled, setEnabled] = useState(false);

  // const [fileName, setFileName] = useState("No File Chosen");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [preview, setPreview] = useState(null);

  // const [isInitializing, setIsInitializing] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isValidResponse, setIsValidResponse] = useState(false);
  // const [curr_id, setCurr_id] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    mobileNum: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`https://tamkeen-dev.com/api/user/registerpass?_format=json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: [{ value: formData.username }],
        pass: [{ value: formData.password }],
        mail: [{ value: formData.email }],
        field_mobile: [{ value: formData.mobileNum }],
        field_name: [{ value: formData.firstName }],
        field_surname: [{ value: formData.lastName }],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errData) => {
            throw new Error(errData.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setError(false);
        setIsValidResponse(true);

        // localStorage.setItem("csrf_token", data.csrf_token);
        // localStorage.setItem("logout_token", data.logout_token);

        // localStorage.setItem("uid", data.current_user.uid);
        // setCurr_id(data.current_user.uid);

        // setFirstName(data.field_name[0].value);
        // console.log(firstName);
        localStorage.setItem("firstName", data.field_name[0].value);
        // setLastName(data.field_surname[0].value);
        localStorage.setItem("lastName", data.field_surname[0].value);

        // setIsAuthenticated(true);
      })
      .catch((errData) => {
        console.log(errData.message);
        if (errData.message.includes("already")) {
          setError("The username or email you have entered is already taken.");
        } else if (
          errData.message.includes("valid email") ||
          errData.message.includes("illegal character")
        ) {
          setError("The username or email you have entered is not a valid");
        }
        setIsValidResponse(false);
        // setError(errData.message);
      })
      .finally(() => {
        console.log("finally");
        setIsLoading(false);
      });
  };

  // const handleCreateAccount = () => {
  //   if (isAuthenticated) {
  //     return (
  //       <>
  //         <div>
  //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit vel
  //           a veniam dolore labore porro animi iusto cum, ipsam, accusamus
  //           molestias dolor molestiae incidunt laboriosam! Ratione, voluptatem.
  //           Id, eveniet nostrum.
  //         </div>
  //       </>
  //     );
  //   }
  // };

  return (
    <>
      <RegisterNav
        accountStatus={{
          status: "Already have an account?",
          buttonContent: "Sign In",
          path: "/home/sign-in",
        }}
      />
      <div className="relative">
        <div className="fixed lg:block hidden bg-secondary-100 bottom-0 top-0 -z-50 start-0 end-1/2">
          <div className="h-full pt-[76px] px-5 flex justify-center items-center">
            <img src="/create-account.png" alt="" className="scale-75" />
          </div>
        </div>
        <div className="flex lg:justify-end justify-center">
          <div className="lg:w-1/2 md:w-3/5 sm:w-4/5 w-full pt-[76px]">
            <div className="py-10 px-5 flex flex-col items-center gap-4">
              <div className="font-semibold text-4xl text-center">
                Create your account
              </div>
              <form
                action=""
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-5 xl:w-5/6 w-full"
              >
                <span className="flex flex-col gap-2">
                  <span className="text-sm">Full Name</span>
                  <span className="flex lg:flex-row flex-col gap-4">
                    <input
                      disabled={isLoading}
                      value={formData.firstName}
                      onInput={(e) => {
                        setFormData({
                          ...formData,
                          firstName: e.target.value,
                        });
                      }}
                      required
                      className=""
                      type="text"
                      // name=""
                      id="firstName"
                      placeholder="First name..."
                    />
                    <input
                      disabled={isLoading}
                      required
                      value={formData.lastName}
                      onInput={(e) => {
                        setFormData({
                          ...formData,
                          lastName: e.target.value,
                        });
                      }}
                      className=""
                      type="text"
                      // name=""
                      id="lastName"
                      placeholder="Last name..."
                    />
                  </span>
                </span>
                <span className="flex flex-col gap-2">
                  <span className="text-sm">UserName</span>
                  <input
                    disabled={isLoading}
                    required
                    value={formData.username}
                    onInput={(e) => {
                      setFormData({
                        ...formData,
                        username: e.target.value,
                      });
                    }}
                    className=""
                    type="text"
                    // name=""
                    id="username"
                    placeholder="Username"
                  />
                </span>
                <span className="flex flex-col gap-2">
                  <span className="text-sm">Mobile</span>
                  <input
                    disabled={isLoading}
                    required
                    value={formData.mobileNum}
                    onInput={(e) => {
                      setFormData({
                        ...formData,
                        mobileNum: e.target.value,
                      });
                    }}
                    className=""
                    type="number"
                    // name=""
                    id="mobile"
                    placeholder="ex: 963 000 0000"
                  />
                </span>
                <span className="flex flex-col gap-2">
                  <span className="text-sm">Email</span>
                  <input
                    disabled={isLoading}
                    required
                    value={formData.email}
                    onInput={(e) => {
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      });
                    }}
                    className=""
                    type="text"
                    // name=""
                    id="email"
                    placeholder="Email address"
                  />
                </span>
                {/* <span className="flex items-center gap-2">
                  <span className="w-24 h-24 shrink-0 rounded bg-gray-100 flex justify-center items-center">
                    {!preview ? (
                      <svg
                        width={44}
                        height={36}
                        viewBox="0 0 44 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.666992 5.00008C0.666992 2.60685 2.60709 0.666748 5.00033 0.666748H39.0003C41.3936 0.666748 43.3337 2.60685 43.3337 5.00008V31.6667C43.3337 34.06 41.3936 36.0001 39.0003 36.0001H5.00033C2.60709 36.0001 0.666992 34.06 0.666992 31.6667V5.00008ZM5.00033 2.66675C3.71166 2.66675 2.66699 3.71142 2.66699 5.00008V31.6667C2.66699 32.9554 3.71166 34.0001 5.00033 34.0001H39.0003C40.289 34.0001 41.3337 32.9554 41.3337 31.6667V5.00008C41.3337 3.71142 40.289 2.66675 39.0003 2.66675H5.00033Z"
                          fill="#B2B9C4"
                        />
                        <ellipse
                          cx="10.6673"
                          cy="10.0001"
                          rx="4.33333"
                          ry="4.33333"
                          fill="#B2B9C4"
                        />
                        <path
                          d="M6.33398 28.3335V26.3572C6.33398 25.9152 6.50958 25.4912 6.82214 25.1787L12.2103 19.7906C12.8393 19.1615 13.8516 19.1374 14.5099 19.7358L15.8412 20.9461C16.4928 21.5385 17.4928 21.5217 18.1241 20.9079L27.8224 11.479C28.4758 10.8438 29.5183 10.8511 30.1627 11.4955L37.8458 19.1787C38.1584 19.4912 38.334 19.9152 38.334 20.3572V28.3335C38.334 29.254 37.5878 30.0002 36.6673 30.0002H8.00065C7.08018 30.0002 6.33398 29.254 6.33398 28.3335Z"
                          fill="#B2B9C4"
                        />
                      </svg>
                    ) : (
                      <img
                        src={preview}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    )}
                  </span>
                  <span className="flex flex-col gap-2 grow">
                    <span className="italic font-light lg:text-sm text-xs">
                      Please upload square image, size less than 800 KB
                    </span>
                    <span className="bg-primary-200 p-2.5 flex items-center gap-3">
                      <label
                        htmlFor="fileUpload"
                        className="cursor-pointer shrink-0 px-5 py-2.5 text-primary-500 border border-primary-500 flex"
                      >
                        Choose File
                      </label>
                      <input
                        onChange={handleFileChange}
                        type="file"
                        accept="image/*"
                        // name=""
                        id="fileUpload"
                        className="hidden!"
                        placeholder="Choose File"
                      />
                      {!errorMessage ? (
                        <span className="text-sm">{fileName}</span>
                      ) : (
                        <span className="text-danger-500 text-sm">
                          {errorMessage}
                        </span>
                      )}
                    </span>
                  </span>
                </span> */}
                <span className="flex lg:flex-row flex-col gap-4">
                  <span className="flex flex-col grow gap-2">
                    <span className="text-sm">Password</span>
                    <input
                      disabled={isLoading}
                      required
                      value={formData.password}
                      onInput={(e) => {
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        });
                      }}
                      className=""
                      type="password"
                      // name=""
                      id="password"
                      placeholder="Create password"
                    />
                  </span>
                  <span className="flex flex-col grow gap-2">
                    <span className="text-sm">Confirm Password</span>
                    <input
                      className=""
                      type="password"
                      // name=""
                      id="confirmPassword"
                      placeholder="Confirm password"
                    />
                  </span>
                </span>
                <div>
                  {error && <span className="text-danger-500">{error}</span>}
                </div>
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
                      <span className="text-gray-600">
                        I Agree with all of your
                      </span>
                      <a
                        href="#"
                        className="text-secondary-500 hover:underline!"
                      >
                        Terms & Conditions
                      </a>
                    </Label>
                  </Field>
                  <button className="primary-btn">Create account</button>
                </div>
                <div className="w-full flex justify-center fixed top-14 z-50 inset-x-0">
                  {isValidResponse && (
                    <>
                      <div className="border px-4 py-2 text-lg bg-success-100 text-success-600 flex items-center gap-x-2">
                        Please Check Your Email <MailIcon />
                      </div>
                    </>
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

export default CreateAccount;
