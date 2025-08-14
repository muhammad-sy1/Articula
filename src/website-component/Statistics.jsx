import React from "react";

const Statistics = ({ statistic }) => {
  const { statisticIcon, statisticName, statisticNum } = statistic;

  return (
    <>
      <div className="lg:col-span-3 md:col-span-5 col-span-1">
        <div className="flex items-start gap-2">
          <div className="py-1">
            {statisticIcon}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-semibold">{statisticNum}</div>
            <div className="text-sm font-medium text-gray-700">{statisticName}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
