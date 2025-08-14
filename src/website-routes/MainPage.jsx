import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Jobs from "./Jobs";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import FAQs from "./FAQs";
import CreateAccount from "./CreateAccount";
import SignIn from "./SignIn";
import Articles from "./Articles";
import MyAccount from "./MyAccount";
import Error404 from "./Error404";
import MyArticles from "./MyArticles";

import UsernameContext from "../context/UsernameContext";

const MainPage = () => {
  const [username, setUsername] = useState("Muhammad Alyousef");
  const userValues = { username, setUsername };

  return (
    <> 
      <UsernameContext.Provider value={userValues}>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-articles" element={<MyArticles />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </UsernameContext.Provider>
    </>
  );
};

export default MainPage;
