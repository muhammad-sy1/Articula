import React from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GiNetworkBars } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";

const JobOpportunity = ({ JobOpportunityDetails }) => {
  const {
    jobImage,
    jobCategory,
    jobCategoryTextColor,
    jobCategoryBgColor,
    jobName,
    experienceYearNum,
    salary,
    jobType,
    jobLevel,
    hoursRequired,
  } = JobOpportunityDetails;
  return (
    <>
      <div className="lg:col-span-2 col-span-4">
        <a
          href="#"
          className="h-full bg-white hover:shadow-(--shadow-gray-800) flex border-1 border-gray-100"
        >
          <div className="w-1/3 h-40 flex overflow-hidden">
            <img className="w-full h-full object-cover transition-transform duration-200 hover:scale-110" src={jobImage} alt="" />
          </div>
          <div className="w-2/3 px-6 py-4 flex flex-col gap-3 justify-between">
            <div className="flex xl:flex-row flex-col xl:gap-0 gap-1 justify-between items-start border-b-1 border-b-gray-100 pb-3">
              <div className="flex flex-col items-start gap-1">
                <span
                  className={`inline-flex uppercase items-center ${jobCategoryBgColor} px-2 py-1 text-xs font-medium ${jobCategoryTextColor}`}
                >
                  {jobCategory}
                </span>
                <div className="font-medium text-gray-900">{jobName}</div>
                <div className="font-medium text-gray-700">
                  {experienceYearNum}
                </div>
              </div>
              <div className="text-gray-900 text-lg">
                {salary}
                <span className="text-gray-700 text-sm"> / Month</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm flex gap-1 items-center">
                <FaRegPenToSquare className="text-secondary-500 text-lg" />
                <span>{jobType}</span>
              </div>
              <div className="text-sm flex gap-1 items-center">
                <GiNetworkBars className="text-danger-500 text-lg" />
                <span>{jobLevel}</span>
              </div>
              <div className="text-sm flex gap-1 items-center">
                <IoTimeOutline className="text-success-500 text-lg" />
                <span>{hoursRequired}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default JobOpportunity;
