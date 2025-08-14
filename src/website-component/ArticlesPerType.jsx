import React from "react";

const ArticlesPerType = ({ article }) => {
  const { authName, arTitle, arBody, arImg } = article;
  return (
    <>
      {/* <div className={`border-b-gray-100`}> */}
        <div className="flex items-center gap-x-3">
          <span className="flex flex-col gap-y-1.5 pe-10">
            <a
              href="#"
              className="flex items-center w-fit gap-x-3 text-gray-300 hover:text-gray-800"
            >
              {/* <span className="size-6 rounded-full overflow-hidden">
                <img src={authImg} alt="" />
              </span> */}
              <span className="text-sm">{authName}</span>
            </a>
            <a
              href="#"
              className="text-xl font-semibold line-clamp-1! relative w-fit"
            >
              {arTitle}
            </a>
            <a href="#" className="text-sm text-gray-700 line-clamp-1!">
              {arBody}
            </a>
          </span>
          <a
            href="#"
            className="w-40 h-28 shrink-0 order-first overflow-hidden"
          >
            <img
              className="w-full h-full object-cover hover:scale-110 transition"
              src={`${arImg}`}
              alt=""
            />
          </a>
        </div>
      {/* </div> */}
    </>
  );
};

export default ArticlesPerType;
