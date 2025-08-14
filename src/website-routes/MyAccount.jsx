import React, { useEffect, useState } from "react";
import Navbar from "../website-component/Navbar";
import Footer from "../website-component/Footer";

import { LuUpload } from "react-icons/lu";
import { UserName } from "../UserName";

const MyAccount = () => {
  const [xCsrfToken, setXCsrfToken] = useState("");
  const userId = localStorage.getItem("userId");
  const cred = localStorage.getItem("credentials");
  const [userImage, setUserImage] = useState();
  const [userImageURL, setUserImageURL] = useState();
  const [userImageID, setUserImageID] = useState();
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const [bodyData, setBodyData] = useState({
    field_name: [{ value: "" }],
    field_surname: [{ value: "" }],
    // user_picture: [{ target_id: userImageID }],
  });

  const articleData = JSON.stringify({
    field_name: [
      {
        value: FormData.field_name,
      },
    ],
    field_surname: [
      {
        value: FormData.field_surname,
      },
    ],
    user_picture: [
      {
        target_id: userImageID,
      },
    ],
  });

  const getCsrfToken = () => {
    fetch("https://tamkeen-dev.com/api/session/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${cred}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch CSRF token");
        }
        return response.text();
      })
      .then((data) => {
        setXCsrfToken(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setUserImage(file);
    getCsrfToken();
  };

  const fetchUserPicture = () => {
    fetch(
      "https://tamkeen-dev.com/api/file/upload/node/blog/field_image?_format=json",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${cred}`,
          "Content-Type": "application/octet-stream",
          "Content-Disposition": `file; filename="${userImage.name}"`,
          "X-CSRF-Token": xCsrfToken,
        },
        body: userImage,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setUserImageID(data.fid[0].value);
        console.log(userImageID);
      })
      .catch((err) => {
        err.message;
      });
  };

  useEffect(() => {
    if (userImage && xCsrfToken) {
      fetchUserPicture();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userImage, xCsrfToken]);

  function updateUser() {
    console.log(userId);
    fetch(`https://tamkeen-dev.com/api/user/${userId}?_format=json`, {
      method: "PATCH",
      headers: {
        Authorization: `Basic ${cred}`,
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": xCsrfToken,
      },
      body: articleData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error! status: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log("User updated successfully:", data);
        // setFirstName(data.field_name[0].value);
        localStorage.setItem("firstName", firstName);

        // setLastName(data.field_surname[0].value);
        localStorage.setItem("lastName", lastName);

        setUserImageURL(data.user_picture[0].url);
        console.log("User image url:", data.user_picture[0].url);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  }

  return (
    <>
      {/* <UserName.Provider value={{ firstName }}> */}
      <Navbar />
      <div className="h-40 mb-20 relative">
        <div className="bg-paten absolute inset-0 z-0"></div>
        <div className="container mx-auto xl:px-10 px-4 h-full">
          <div className="h-full flex items-end">
            <div className="h-36 bg-white p-6 w-full border border-primary-200 translate-y-8">
              <div className="flex gap-5 items-center h-full">
                <div className="overflow-hidden size-20 bg-secondary-300 rounded-full relative">
                  <img src="/y-person.jpg" alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-semibold text-2xl">{`${firstName} ${lastName}`}</div>
                  <div className="text-gray-600">
                    Web Designer & Best-Selling Instructor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto xl:px-40 px-4">
        <div className="flex flex-col gap-10 mb-10">
          <div className="flex flex-col gap-5">
            <div className="text-xl font-semibold">Account settings</div>
            <div className="flex md:flex-row flex-col gap-x-20 items-start gap-y-5">
              <div className="p-7 flex flex-col items-center gap-3 border border-gray-200">
                <div className="size-60 relative">
                  <img src="/user.jpg" className="w-full h-full object-cover" alt="" />
                  <div className="absolute bottom-0 inset-x-0 h-10 transition bg-gray-900/75 hover:bg-gray-900/85 z-50 flex gap-x-2 text-white justify-center items-center">
                    <label
                      htmlFor="fileUpload"
                      className="cursor-pointer text-white w-full h-full"
                    >
                      <div className="w-full flex gap-x-3 justify-center h-full items-center">
                        <LuUpload className="text-lg" />
                        <span>Upload Photo</span>
                      </div>
                    </label>
                    <input
                      onChange={handleFileChange}
                      // value={bodyData.user_picture}
                      type="file"
                      accept="image/*"
                      name=""
                      id="fileUpload"
                      className="hidden!"
                      placeholder="Choose File"
                    />
                  </div>
                  <img src={userImageURL} alt="" />
                </div>
                {/* <div className="text-xs text-center text-gray-700 w-48">
                  Image size should be under 1MB and image ration needs to be
                  1:1
                </div> */}
              </div>
              <div className="w-full">
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        onInput={(e) => {
                          setBodyData({
                            ...bodyData,
                            field_name: [{ value: e.target.value }],
                          });
                        }}
                        // value={userImage}
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="First name..."
                        className=""
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        onInput={(e) => {
                          setBodyData({
                            ...bodyData,
                            field_surname: [{ value: e.target.value }],
                          });
                        }}
                        // value={bodyData.field_surname[0].value}
                        type="text"
                        name="last-name"
                        id="last-name"
                        placeholder="Last name..."
                        className=""
                      />
                    </div>
                  </div>
                  {/* <div className="sm:col-span-6">
                    <label htmlFor="email" className="">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className=""
                      />
                    </div>
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="about" className="">
                      Title
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="about"
                        id="about"
                        rows="3"
                        placeholder="Your tittle, proffesion or small biography ..."
                        className="resize-none h-20"
                      ></textarea>
                    </div>
                  </div> */}
                  <div className="col-span-full">
                    <button className="primary-btn" onClick={updateUser}>
                      <span>Save Changes</span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-5 lg:w-1/3">
            <div className="text-lg font-semibold">Change password</div>
            <div className="flex flex-col gap-y-2 ">
              <label htmlFor="passWord" className="">
                Current Password
              </label>
              <div className="">
                <input
                  id="passWord"
                  name="passWord"
                  type="password"
                  placeholder="Password"
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 ">
              <label htmlFor="passWord" className="">
                New Password
              </label>
              <div className="">
                <input
                  id="passWord"
                  name="passWord"
                  type="password"
                  placeholder="New Password"
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 ">
              <label htmlFor="passWord" className="">
                Confirm Password
              </label>
              <div className="">
                <input
                  id="passWord"
                  name="passWord"
                  type="password"
                  placeholder="Confirm new password"
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 items-start">
              <button className="primary-btn">
                <span>Change Password</span>
                <span></span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
      {/* </UserName.Provider> */}
    </>
  );
};

export default MyAccount;
