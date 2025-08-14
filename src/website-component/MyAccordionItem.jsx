import React from "react";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const MyAccordionItem = ({ items }) => {
  const { value, accordionTrigger, accordionContent } = items;
  return (
    <>
      <AccordionItem
        className="mb-2 border-b-0 border last:border"
        value={value}
      >
        <AccordionTrigger className="font-medium transition-colors duration-100 ease-linear data-[state=open]:bg-gray-900 data-[state=open]:text-white cursor-pointer  hover:no-underline hover:bg-gray-900 rounded-none hover:text-white px-2">
          {accordionTrigger}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-gray-700 px-5 py-3">
          {accordionContent}
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default MyAccordionItem;
