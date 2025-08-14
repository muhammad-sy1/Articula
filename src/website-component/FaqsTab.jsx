import React from "react";
import { Tab } from "@headlessui/react";

const FaqsTab = ({ tabContent }) => {
  return (
    <div>
      <Tab className="data-selected:bg-primary-500 text-start cursor-pointer text-nowrap w-full px-4 py-3 data-selected:text-white">
        {tabContent}
      </Tab>
    </div>
  );
};

export default FaqsTab;
