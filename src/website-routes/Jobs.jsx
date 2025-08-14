import React from "react";
import Breadcrumb from "../website-component/Breadcrumb";
import Footer from "../website-component/Footer";
import Categories from "../website-component/Categories";
import JobOpportunity from "../website-component/JobOpportunity";
import Navbar from "../website-component/Navbar";

import {
  AiFillAlert,
  AiFillBank,
  AiFillCloud,
  AiFillCompass,
  AiFillFund,
  AiFillLayout,
  AiFillNotification,
} from "react-icons/ai";
import { FaCamera } from "react-icons/fa";

const Jobs = () => {
  return (
    <>
      <Navbar />
      <Breadcrumb currentPage={"Jobs"} />
      <div className="border-b border-primary-100">
        <div className="container mx-auto lg:px-10 px-4">
          <div className="grid grid-cols-2 w-full gap-y-10 py-10">
            <div className="md:col-span-1 col-span-2 h-full">
              <div className="flex flex-col items-start justify-center h-full">
                <div className="flex flex-col items-start justify-center lg:w-4/5 gap-4 h-full">
                  <div className="font-semibold gl:text-5xl text-3xl">
                    Join the most incredible & creative team.
                  </div>
                  <div className="text-gray-700 text-lg">
                    Proin gravida enim augue, dapibus ultrices eros feugiat et.
                    Pellentesque bibendum orci felis, sit amet efficitur felis
                    lacinia ac. Mauris gravida justo ac nunc consectetur.
                  </div>
                  <button className="flex primary-btn">
                    View Open Positions
                  </button>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 col-span-2 order-first md:flex justify-center items-center">
              <div className="flex justify-center items-center">
                <div className="h-96 overflow-hidden">
                  <img
                    className="size-full object-cover object-top"
                    src="/person.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto lg:px-10 px-4">
          <div className="grid grid-cols-2 w-full gap-20">
            <div className="xl:col-span-1 col-span-2 h-full flex justify-center items-center">
              <div className="h-96 w-full relative">
                <div className="absolute inset-y-0 w-4 bg-gray-50 left-1/3 "></div>
                <div className="absolute inset-y-0 w-4 bg-gray-50 left-2/3 "></div>
                <div className="absolute bottom-0 h-20 w-1/3 bg-gray-50 left-0 "></div>
                <div className="absolute top-0 h-20 w-1/3 bg-gray-50 right-0 "></div>
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt=""
                />
              </div>
            </div>
            <div className="xl:col-span-1 col-span-2 h-full flex justify-center items-center">
              <div className="flex flex-col gap-10 ">
                <div className="flex flex-col gap-4">
                  <div className="text-4xl font-semibold">
                    Why you will join our team
                  </div>
                  <div className="text-lg text-gray-700">
                    Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat
                    felis. Vestibulum non consectetur tortor. Morbi at orci
                    vehicula, vehicula mi ut, vestibulum odio.
                  </div>
                </div>
                <div className="flex flex-col gap-10">
                  <div className="bg-white p-4">
                    <div className="flex items-start gap-8">
                      <div className="flex justify-center items-center shrink-0 rounded-[50%] bg-success-500 w-7 h-7">
                        <svg
                          width={16}
                          height={11}
                          viewBox="0 0 16 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.875 1.25L5.70828 10L1.125 5.625"
                            stroke="white"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="font-medium">
                          Ut justo ligula, vehicula sed egestas vel.
                        </div>
                        <div className="text-gray-600">
                          Quisque leo leo, suscipit sed arcu sit amet, iaculis
                          feugiat felis. Vestibulum non consectetur tortor.
                          Morbi at orci vehicula, vehicula mi ut, vestibulum
                          odio.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4">
                    <div className="flex items-start gap-8">
                      <div className="flex justify-center items-center shrink-0 rounded-[50%] bg-success-500 w-7 h-7">
                        <svg
                          width={16}
                          height={11}
                          viewBox="0 0 16 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.875 1.25L5.70828 10L1.125 5.625"
                            stroke="white"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-4">
                        <div className="font-medium">
                          Ut justo ligula, vehicula sed egestas vel.
                        </div>
                        <div className="text-gray-600">
                          Quisque leo leo, suscipit sed arcu sit amet, iaculis
                          feugiat felis. Vestibulum non consectetur tortor.
                          Morbi at orci vehicula, vehicula mi ut, vestibulum
                          odio.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:px-10 px-4">
        <div className="categories flex flex-col items-center justify-between py-10">
          <div className="text-4xl mb-10 font-semibold">
            Browse top category
          </div>
          <div className="w-full grid grid-cols-12 gap-5 mb-10">
            <Categories
              category={{
                bgColor: "bg-secondary-100",
                categoryName: "label",
                articleNum: "63,476 Articles",
                categoryIcon: (
                  <AiFillAlert className="text-secondary-500 text-3xl" />
                ),
              }}
            />
            <Categories
              category={{
                bgColor: "bg-primary-100",
                categoryName: "Business",
                articleNum: "63,476 Articles",
                categoryIcon: (
                  <AiFillBank className="text-primary-500 text-3xl" />
                ),
              }}
            />
            <Categories
              category={{
                bgColor: "bg-success-100",
                categoryName: "IT & Software",
                articleNum: "63,476 Articles",
                categoryIcon: (
                  <AiFillCloud className="text-success-500 text-3xl" />
                ),
              }}
            />
            <Categories
              category={{
                bgColor: "bg-warning-100",
                categoryName: "Finance & Accounting",
                articleNum: "63,476 Articles",
                categoryIcon: (
                  <AiFillCompass className="text-warning-500 text-3xl" />
                ),
              }}
            />
            <Categories
              category={{
                bgColor: "bg-danger-100",
                categoryName: "Personal Development",
                articleNum: "63,476 Articles",
                categoryIcon: (
                  <AiFillFund className="text-danger-500 text-3xl" />
                ),
              }}
            />
            <Categories
              category={{
                bgColor: "bg-gray-50",
                categoryName: "Office Productivity",
                articleNum: "63,476 Articles",
                categoryIcon: (
                  <AiFillLayout className="text-gray-700 text-3xl" />
                ),
              }}
            />
            <Categories
              category={{
                bgColor: "bg-secondary-100",
                categoryName: "Marketing",
                articleNum: "63,476 Articles",
                categoryIcon: (
                  <AiFillNotification className="text-secondary-500 text-3xl" />
                ),
              }}
            />
            <Categories
              category={{
                bgColor: "bg-gray-100",
                categoryName: "Photography & Video",
                articleNum: "63,476 Articles",
                categoryIcon: <FaCamera className="text-gray-900 text-3xl" />,
              }}
            />
          </div>
        </div>
      </div>
      <div className="relative bg-gray-50 py-20">
        <div className="container mx-auto lg:px-10 px-4">
          <div className="mx-3 flex flex-col items-center gap-y-10">
            <div className="text-4xl font-semibold text-gray-900">
              Our Job Opportunities
            </div>
            <div className="grid xl:gap-6 gap-3 w-full grid-cols-4">
              <JobOpportunity
                JobOpportunityDetails={{
                  jobImage:
                    "https://images.unsplash.com/photo-1586253633269-69254aa67408",
                  jobCategory: "Featured",
                  jobCategoryBgColor: "bg-danger-100",
                  jobCategoryTextColor: "text-danger-600",
                  jobName: "System Analysis",
                  experienceYearNum: "2 Years of experience",
                  salary: "$300",
                  jobType: "Part Time",
                  jobLevel: "Senior",
                  hoursRequired: "7 hours",
                }}
              />
              <JobOpportunity
                JobOpportunityDetails={{
                  jobImage:
                    "https://plus.unsplash.com/premium_photo-1689052849186-a1e307f6400a",
                  jobCategory: "Necessary",
                  jobCategoryBgColor: "bg-success-100",
                  jobCategoryTextColor: "text-success-600",
                  jobName: "UI/UX Designer",
                  experienceYearNum: "1 Year of experience",
                  salary: "$200",
                  jobType: "Full Time",
                  jobLevel: "Junior",
                  hoursRequired: "4 hours",
                }}
              />
              <JobOpportunity
                JobOpportunityDetails={{
                  jobImage:
                    "https://plus.unsplash.com/premium_photo-1688753653862-48dcc0ec7c11",
                  jobCategory: "Featured",
                  jobCategoryBgColor: "bg-secondary-100",
                  jobCategoryTextColor: "text-secondary-600",
                  jobName: "Frontend Developer",
                  experienceYearNum: "3 Years of experience",
                  salary: "$250",
                  jobType: "Part Time",
                  jobLevel: "Senior",
                  hoursRequired: "6 hours",
                }}
              />
              <JobOpportunity
                JobOpportunityDetails={{
                  jobImage:
                    "https://plus.unsplash.com/premium_photo-1688700439239-8120f554eb2e",
                  jobCategory: "Fast",
                  jobCategoryBgColor: "bg-danger-100",
                  jobCategoryTextColor: "text-danger-600",
                  jobName: "ASP Backend Developer",
                  experienceYearNum: "4 Years of experience",
                  salary: "$500",
                  jobType: "Full Time",
                  jobLevel: "Senior",
                  hoursRequired: "5 hours",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
