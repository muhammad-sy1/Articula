import React, { useEffect, useState } from "react";
import Breadcrumb from "../website-component/Breadcrumb";
import Navbar from "../website-component/Navbar";
import Footer from "../website-component/Footer";
import FaqsTab from "../website-component/FaqsTab";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Accordion } from "../components/ui/accordion";
import MyAccordionItem from "../website-component/MyAccordionItem";

const FAQs = () => {
  const [faqsTab, setFaqsTab] = useState([]);
  useEffect(() => {
    fetch("https://tamkeen-dev.com/api/faq-list")
      .then((response) => {
        if (response.ok) return response.json();
        else throw Error("Something went wrong!");
      })
      .then((data) => {
        const allTags = data.map((tagItem) => tagItem.category).flat();
        const uniqueTags = [...new Set(allTags)];
        setFaqsTab(uniqueTags);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
      });
  }, []);

  // console.log(faqsTab);
  return (
    <>
      <Navbar />

      <Breadcrumb currentPage={"FAQs"} />
      <div className="container mx-auto lg:px-8 px-4">
        <div className="xl:px-10 py-20">
          <div className="flex flex-col gap-10">
            <div className="text-4xl text-center font-semibold">
              Frequently asked questions
            </div>
            <TabGroup vertical defaultIndex={0}>
              <div className="grid grid-cols-4 w-full gap-6">
                <div className="faqTabList lg:col-span-1 col-span-4 font-medium">
                  <TabList className="flex tabList lg:flex-col overflow-x-auto  border border-gray-100 py-2">
                    {faqsTab.map((item, index) => (
                      <div key={index}>
                        <FaqsTab tabContent={item} />
                      </div>
                    ))}
                  </TabList>
                </div>
                <div className="lg:col-span-2 col-span-4">
                  <TabPanels>
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
                                    Our flagship product combines cutting-edge
                                    technology with sleek design. Built with
                                    premium materials, it offers unparalleled
                                    performance and reliability.
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
                                    We offer worldwide shipping through trusted
                                    courier partners. Standard delivery takes
                                    3-5 business days, while express shipping
                                    ensures delivery within 1-2 business days.
                                  </p>
                                  <p>
                                    All orders are carefully packaged and fully
                                    insured. Track your shipment in real-time
                                    through our dedicated tracking portal.
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
                                    We stand behind our products with a
                                    comprehensive 30-day return policy. If
                                    you're not completely satisfied, simply
                                    return the item in its original condition.
                                  </p>
                                  <p>
                                    Our hassle-free return process includes free
                                    return shipping and full refunds processed
                                    within 48 hours of receiving the returned
                                    item.
                                  </p>
                                </>
                              ),
                            }}
                          />
                        </Accordion>
                      </div>
                    </TabPanel>
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
                              accordionTrigger: "Reading Rate",
                              accordionContent: (
                                <>
                                  <p>
                                    Key features include advanced processing
                                    capabilities, and an intuitive user
                                    interface designed for both beginners and
                                    experts.
                                  </p>
                                  <p>
                                    Our flagship product combines cutting-edge
                                    technology with sleek design. Built with
                                    premium materials, it offers unparalleled
                                    performance and reliability.
                                  </p>
                                </>
                              ),
                            }}
                          />
                          <MyAccordionItem
                            items={{
                              value: "item-2",
                              accordionTrigger: "View Much",
                              accordionContent: (
                                <>
                                  <p>
                                    We offer worldwide shipping through trusted
                                    courier partners. Standard delivery takes
                                    3-5 business days, while express shipping
                                    ensures delivery within 1-2 business days.
                                  </p>
                                  <p>
                                    All orders are carefully packaged and fully
                                    insured. Track your shipment in real-time
                                    through our dedicated tracking portal.
                                  </p>
                                </>
                              ),
                            }}
                          />
                          <MyAccordionItem
                            items={{
                              value: "item-3",
                              accordionTrigger: "Visiting Number",
                              accordionContent: (
                                <>
                                  <p>
                                    We stand behind our products with a
                                    comprehensive 30-day return policy. If
                                    you're not completely satisfied, simply
                                    return the item in its original condition.
                                  </p>
                                  <p>
                                    Our hassle-free return process includes free
                                    return shipping and full refunds processed
                                    within 48 hours of receiving the returned
                                    item.
                                  </p>
                                </>
                              ),
                            }}
                          />
                        </Accordion>
                      </div>
                    </TabPanel>
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
                              accordionTrigger: "The Prices Scope",
                              accordionContent: (
                                <>
                                  <p>
                                    Our flagship product combines cutting-edge
                                    technology with sleek design. Built with
                                    premium materials, it offers unparalleled
                                    performance and reliability.
                                  </p>
                                  <p>
                                    Key features include advanced processing
                                    capabilities, and an intuitive user
                                    interface designed for both beginners and
                                    experts.
                                  </p>
                                </>
                              ),
                            }}
                          />
                          <MyAccordionItem
                            items={{
                              value: "item-2",
                              accordionTrigger: "Return Policy",
                              accordionContent: (
                                <>
                                  <p>
                                    We offer worldwide shipping through trusted
                                    courier partners. Standard delivery takes
                                    3-5 business days, while express shipping
                                    ensures delivery within 1-2 business days.
                                  </p>
                                  <p>
                                    All orders are carefully packaged and fully
                                    insured. Track your shipment in real-time
                                    through our dedicated tracking portal.
                                  </p>
                                </>
                              ),
                            }}
                          />
                          <MyAccordionItem
                            items={{
                              value: "item-3",
                              accordionTrigger: "Shipping Details",
                              accordionContent: (
                                <>
                                  <p>
                                    We stand behind our products with a
                                    comprehensive 30-day return policy. If
                                    you're not completely satisfied, simply
                                    return the item in its original condition.
                                  </p>
                                  <p>
                                    Our hassle-free return process includes free
                                    return shipping and full refunds processed
                                    within 48 hours of receiving the returned
                                    item.
                                  </p>
                                </>
                              ),
                            }}
                          />
                        </Accordion>
                      </div>
                    </TabPanel>
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
                              accordionTrigger: "Return Policy",
                              accordionContent: (
                                <>
                                  <p>
                                    Our flagship product combines cutting-edge
                                    technology with sleek design. Built with
                                    premium materials, it offers unparalleled
                                    performance and reliability.
                                  </p>
                                  <p>
                                    Key features include advanced processing
                                    capabilities, and an intuitive user
                                    interface designed for both beginners and
                                    experts.
                                  </p>
                                </>
                              ),
                            }}
                          />
                          <MyAccordionItem
                            items={{
                              value: "item-2",
                              accordionTrigger: "Product Information",
                              accordionContent: (
                                <>
                                  <p>
                                    We offer worldwide shipping through trusted
                                    courier partners. Standard delivery takes
                                    3-5 business days, while express shipping
                                    ensures delivery within 1-2 business days.
                                  </p>
                                  <p>
                                    All orders are carefully packaged and fully
                                    insured. Track your shipment in real-time
                                    through our dedicated tracking portal.
                                  </p>
                                </>
                              ),
                            }}
                          />
                          <MyAccordionItem
                            items={{
                              value: "item-3",
                              accordionTrigger: "Question Mark",
                              accordionContent: (
                                <>
                                  <p>
                                    We stand behind our products with a
                                    comprehensive 30-day return policy. If
                                    you're not completely satisfied, simply
                                    return the item in its original condition.
                                  </p>
                                  <p>
                                    Our hassle-free return process includes free
                                    return shipping and full refunds processed
                                    within 48 hours of receiving the returned
                                    item.
                                  </p>
                                </>
                              ),
                            }}
                          />
                        </Accordion>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </div>
                <div className="lg:col-span-1 col-span-4">
                  <div className="p-6 bg-gray-50 flex flex-col gap-4">
                    <div className="font-medium text-lg">
                      Don’t find your answer!
                    </div>
                    <div className="text-gray-600 text-xs">
                      Don’t worry, write your question here and our support team
                      will help you.
                    </div>
                    <form
                      action=""
                      className="flex flex-col gap-4 my-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <input
                        className="bg-white flex p-3 text-sm transition-colors duration-200 ease-linear outline outline-transparent focus:outline-gray-400 "
                        type="text"
                        name=""
                        id=""
                        placeholder="Subject"
                      />
                      <textarea
                        className="bg-white h-40 resize-none flex p-3 text-sm transition-colors duration-200 ease-linear outline outline-transparent focus:outline-gray-400"
                        name=""
                        id=""
                        placeholder="Message"
                      ></textarea>
                      <button className="mt-4 self-start primary-btn">
                        <span>Submit question</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </TabGroup>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
