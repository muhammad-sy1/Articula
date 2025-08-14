import React from "react";

const Branches = ({ branch }) => {
  const { branchImg, branchCity, branchDetails, branchAddress } = branch;
  return (
    <>
      <div className="lg:col-span-1 md:col-span-2 col-span-4 flex justify-center items-end p-4 h-96 relative">
        <div className="absolute inset-0 -z-10 h-96">
          <img className="w-full h-full object-cover" src={branchImg} alt="" />
        </div>
        <div className="bg-white w-full flex flex-col gap-3 p-3 items-center">
          <div className="font-medium">{branchCity}</div>
          <div className="text-gray-700 text-center">
            {branchDetails} <br /> {branchAddress}
          </div>
        </div>
      </div>
    </>
  );
};

export default Branches;
