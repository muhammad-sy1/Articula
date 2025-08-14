import React from "react";

const Categories = ({ category }) => {
  const { bgColor, categoryName, articleNum, categoryIcon } = category;
  return (
    <>
      <div
        className={`lg:col-span-3 sm:col-span-6 col-span-12 transition-shadow ease-linear duration-200 hover:shadow-(--shadow-gray-800) ${bgColor}`}
      >
        <a href="#" className="flex items-center p-5">
          <div className="me-3 flex justify-center items-center bg-white w-16 h-16">
            {categoryIcon}
          </div>
          <div className="category">
            <div className="title text-gray-900 font-medium">
              {categoryName}
            </div>
            <div className="details text-gray-600 text-sm">{articleNum}</div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Categories;
