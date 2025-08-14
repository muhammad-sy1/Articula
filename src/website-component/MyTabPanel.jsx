import React from "react";

import { TabPanel } from "@headlessui/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import MyAccordionItem from "./MyAccordionItem";

const MyTabPanel = () => {
  // const { queContent, ansContent } = question;
  return (
    <>
      <TabPanel>
        <div className="flex flex-col gap-6">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <MyAccordionItem
              items={{
                value: "item-1",
                accordionTrigger: "Product Information",
                accordionContent: (
                  <>
                    <p>
                      Our flagship product combines cutting-edge technology with
                      sleek design. Built with premium materials, it offers
                      unparalleled performance and reliability.
                    </p>
                    <p>
                      Key features include advanced processing capabilities, and
                      an intuitive user interface designed for both beginners
                      and experts.
                    </p>
                  </>
                ),
              }}
            />
            <MyAccordionItem
              items={{
                value: "item-2",
                accordionTrigger: "Shipping Details",
                accordionContent: (
                  <>
                    <p>
                      We offer worldwide shipping through trusted courier
                      partners. Standard delivery takes 3-5 business days, while
                      express shipping ensures delivery within 1-2 business
                      days.
                    </p>
                    <p>
                      All orders are carefully packaged and fully insured. Track
                      your shipment in real-time through our dedicated tracking
                      portal.
                    </p>
                  </>
                ),
              }}
            />
            <MyAccordionItem
              items={{
                value: "item-3",
                accordionTrigger: "Return Policy",
                accordionContent: (
                  <>
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you're not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </>
                ),
              }}
            />
          </Accordion>
        </div>
      </TabPanel>
    </>
  );
};

export default MyTabPanel;
