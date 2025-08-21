import { Routes, Route } from "react-router";
import { useState } from "react";

import "./App.css";
import DashboardLogIn from "./dashboard-routes/dashboardLogIn";
import Jobs from "./website-routes/Jobs";
import HomePage from "./website-routes/HomePage";
import About from "./website-routes/About";
import Contact from "./website-routes/Contact";
import FAQs from "./website-routes/FAQs";
import CreateAccount from "./website-routes/CreateAccount";
import SignIn from "./website-routes/SignIn";
import Articles from "./website-routes/Articles";
import MyAccount from "./website-routes/MyAccount";
import Error404 from "./website-routes/Error404";
import MyArticles from "./website-routes/MyArticles";
import ArticleDetails from "./website-routes/ArticleDetails";

import UsernameContext from "./context/UsernameContext";

function App() {
  const [username, setUsername] = useState("Muhammad Alyousef");
  const userValues = { username, setUsername };
  return (
    <>
      <UsernameContext.Provider value={userValues}>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/article-details/:articleID" element={<ArticleDetails  />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-articles" element={<MyArticles />} />
            <Route path="/*" element={<Error404 />} />
            <Route path="dashboard/*" element={<DashboardLogIn />} />
          </Route>
        </Routes>
      </UsernameContext.Provider>
    </>
  );
}

export default App;
