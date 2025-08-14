import React from "react";
import { MdStarRate } from "react-icons/md";

const TopWriter = ({ writer }) => {
  const { writerImg, writerName, writerSpecialty, rating, articleNum } = writer;
  return (
    <>
      <a className="my-4 w-full flex hover:-translate-y-1" href="#">
        <div className="flex flex-col items-center w-full gap-3 border-1 border-gray-100">
          <div className="w-full h-60">
            <img
              src={writerImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-medium">{writerName}</div>
          <div className="text-gray-500 text-sm">{writerSpecialty}</div>
          <div className="w-full border-t-1 font-medium text-sm text-gray-700 border-gray-100 flex justify-between items-center p-3">
            <div className="flex items-center gap-1.5">
              <MdStarRate className="text-lg text-amber-500" />
              <span>{rating}</span>
            </div>
            <div className="">
              {articleNum} <span className="text-gray-500">Articles</span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default TopWriter;
