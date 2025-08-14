import React from "react";
import { GoArrowRight } from "react-icons/go";

const Link = ({ linkContent, content }) => {
  return (
    <>
      <div className={`text-sm flex items-center gap-4`}>
        <span className="text-gray-700">{content}</span>
        <a
          href="#"
          className={`arrow-link text-primary-500 flex gap-2 items-center`}
        >
          <span className="">{linkContent}</span>
          <span className="ArrowIcon">
            <GoArrowRight className="text-xl" />
          </span>
        </a>
      </div>
    </>
  );
};

export default Link;
