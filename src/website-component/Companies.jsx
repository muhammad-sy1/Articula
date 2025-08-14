import React from "react";

const Companies = ({ company }) => {
  const { companyLogo } = company;
  return (
    <div>
      <div className="md:col-span-1 col-span-2">
        <div className="xl:px-10 md:px-5 px-2 shadow-(--shadow-logo) text-4xl h-16 flex justify-center items-center">
          <img className="w-5/6" src={companyLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
