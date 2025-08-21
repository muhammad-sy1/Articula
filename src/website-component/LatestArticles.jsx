import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router";

const LatestArticles = ({ anArticle }) => {
  const {
    articleImg,
    articleTitle,
    articleAuthor,
    articleBody,
    aID,
    // articleCategory,
    // authImg,
    // articleCategoryTextColor,
    // articleCategoryBgColor,
  } = anArticle;
  return (
    <>
      <div
        id="latestArticles"
        className="lg:hover:shadow-(--shadow-gray-800) bg-white transition-shadow duration-200 ease-in-out xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-5 col-span-10"
      >
        <div className="flex flex-col">
          <div className="img-box w-full h-48">
            <a className="w-full h-48 overflow-hidden" href="#">
              <img
                src={articleImg}
                className="w-full h-full object-cover transition-transform duration-200 ease-in-out hover:scale-105"
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-col items-start gap-y-2 overflow-hidden p-3.5 border-b-2 border-gray-100">
            {/* <span
              className={`inline-flex uppercase items-center ${articleCategoryBgColor} px-2 py-1 text-xs font-medium ${articleCategoryTextColor}`}
            >
              {articleCategory}
            </span> */}
            <NavLink
              to={`/article-details/${aID}`}
              className="hover:text-gray-400 inline-flex text-sm font-medium w-2/3 truncate"
            >
              {articleTitle}
            </NavLink>
            <div className="line-clamp-1">{articleBody}</div>
          </div>
          <a href="#" className="p-3.5 flex items-center gap-2">
            {/* <FaRegCircleUser className="text-primary-500 text-2xl" /> */}
            {/* <div className="size-8 rounded-full overflow-hidden border-2 border-gray-600 flex items-center justify-center">
              <img
                className="size-full object-cover object-center"
                src={authImg}
                alt=""
              />
            </div> */}
            <span className="text-xs transition-colors duration-200 ease-linear hover:text-gray-900 text-gray-400">
              {articleAuthor}
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
