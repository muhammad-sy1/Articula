import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import Navbar from "../website-component/Navbar";
import Footer from "../website-component/Footer";
import Companies from "../website-component/Companies";
import Categories from "../website-component/Categories";
import LatestArticles from "../website-component/LatestArticles";
import JobOpportunity from "../website-component/JobOpportunity";
import TopWriter from "../website-component/TopWriter";

// import { FaCamera } from "react-icons/fa";
import {
  AiFillAlert,
  AiFillBank,
  AiFillCloud,
  AiFillCompass,
  // AiFillFund,
  // AiFillLayout,
  // AiFillNotification,
} from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";
import Link from "../website-component/link";
// import { GrNext } from "react-icons/gr";
// import { GrPrevious } from "react-icons/gr";

import { LatestArticlesFetch } from "../services/LatestArticlesFetch";

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    LatestArticlesFetch()
      .then((data) => {
        // console.log(data);
        setLatestArticles(data.rows);
        // console.log(allArticles);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [countNum, setCountNum] = useState(0);
  const maxCountNum = 10;

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCountNum((prev) => {
        if (prev >= maxCountNum) {
          clearInterval(myInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(myInterval);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    const status = localStorage.getItem("csrf_token");
    if (status) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-linear-to-t py-10 lg:py-0 from-gray-50">
        <div className="container mx-auto lg:px-10 px-4">
          <div className="hero-section flex lg:flex-row flex-col justify-between lg:items-center items-start">
            <div className="flex flex-col lg:w-8/12 lg:mt-0 mt-5">
              <h3 className="2xl:text-7xl xl:text-6xl sm:text-5xl text-4xl text-gray-900 font-semibold mb-10">
                Learn with expert <br /> anytime anywhere
              </h3>
              <p className="2xl:text-2xl lg:w-3/4 text-xl text-gray-700 mb-10">
                Our mission is to help people to find the best source online and
                learn with expert anytime, anywhere.
              </p>
              <div className="flex items-center gap-x-3">
                <a
                  href="#latestArticles"
                  className="md:px-6 transition-all duration-200 ease-linear px-5 md:py-2 py-3 hover:bg-gray-800 hover:shadow-(--shadow-gray-800) font-semibold bg-gray-900 text-white md:text-lg text-base"
                >
                  Start Reading
                </a>
                {!isLoggedIn && (
                  <NavLink
                    to="/home/create-account"
                    className="md:px-6 transition-all duration-200 ease-linear px-5 md:py-2 py-3 hover:bg-primary-600 hover:shadow-(--shadow-primary-600) font-semibold bg-primary-500 text-white md:text-lg text-base"
                  >
                    Create Account
                  </NavLink>
                )}
              </div>
            </div>
            <div className="promo-img bg-center lg:order-last order-first w-full h-96 lg:w-[700px] lg:h-[500px] lg:-mask-linear-80 lg:mask-linear-from-80% lg:mask-linear-to-0% bg-[url(/banner.jpg)]">
              {/* <img className='w-full h-full object-cover' src="/src/assets/Scientific-Article.jpg" alt="" /> */}
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
          </div>
          <Link
            content={`We have more category & subcategory.`}
            linkContent={`Browse All`}
          />
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto lg:px-10 px-4">
          <div className="LatestArticles flex flex-col items-center justify-between py-10">
            <div className="text-4xl mb-10 font-semibold">Latest Articles</div>
            {width < 640 ? (
              <div className="w-full mb-10">
                <Swiper
                  spaceBetween={10}
                  freeMode={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1.75,
                    },
                    500: {
                      slidesPerView: 2.5,
                    },
                  }}
                  modules={[FreeMode, Pagination]}
                  onSlideChange={() => console.log("slide change")}
                  // onSwiper={(swiper) => console.log(swiper)}
                >
                  {latestArticles.map((item, index) => (
                    <SwiperSlide key={index}>
                      <LatestArticles
                        anArticle={{
                          articleCategoryTextColor: "text-secondary-700",
                          articleCategoryBgColor: "bg-secondary-100",
                          articleImg: `https://tamkeen-dev.com${item.field_image}`,
                          // articleCategory: "energy",
                          articleTitle: item.title,
                          articleBody: item.body,
                          articleAuthor: item.author,
                          articleId: item.id,
                          // authImg: "/y-person.jpg",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className="w-full mb-10 grid xl:grid-cols-10 lg:grid-cols-9 md:grid-cols-6 grid-cols-10 gap-6">
                {latestArticles.map((item, index) => (
                  <div key={index} className="contents">
                    <LatestArticles
                      anArticle={{
                        articleCategoryTextColor: "text-secondary-700",
                        articleCategoryBgColor: "bg-secondary-100",
                        articleImg: `https://tamkeen-dev.com${item.field_image}`,
                        // articleCategory: "energy",
                        articleTitle: item.title,
                        articleBody: item.body,
                        articleAuthor: item.author,
                        aID: item.id,
                        // authImg: "/y-person.jpg",
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
            <Link
              content={`We have more Articles`}
              linkContent={`Browse All`}
            />
          </div>
        </div>
      </div>
      <div className="relative py-10">
        <div className="absolute inset-x-0 top-0 h-96 -z-10 bg-gray-50"></div>
        <div className="container mx-auto lg:px-10 px-4">
          <div className="bg-white border border-gray-100 py-20">
            <div className="md:mx-12 mx-3 flex flex-col items-center gap-y-10">
              <div className="text-4xl font-semibold text-gray-900">
                Our Job Opportunities
              </div>
              <div className="grid xl:gap-6 gap-3 w-full grid-cols-4">
                <JobOpportunity
                  JobOpportunityDetails={{
                    jobImage:
                      "/opportunities-1.jpg",
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
                      "/opportunities-2.jpg",
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
                      "/opportunities-3.jpeg",
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
                      "/opportunities-4.jpeg",
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
              <Link
                content={`We have more job Opportunities`}
                linkContent={`Browse All`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto  lg:px-10 px-4">
          <div className="grid grid-cols-2 gap-6 w-full">
            <div className="xl:col-span-1 col-span-2">
              <div className="flex h-full p-10 bg-gradient-to-r from-[#CC522B] to-[#FF6636] text-white">
                <div className="flex flex-col items-start gap-3 md:w-2/3 w-full">
                  <div className="text-3xl font-semibold">Become an Author</div>
                  <div className="text-sm">
                    Authors from around the world teach millions of students on
                    Udemy. We provide the tools and skills to teach what you
                    love.
                  </div>
                  <a
                    href="#"
                    className="arrow-link flex items-center gap-2 text-primary-500 bg-white px-5 py-2 font-semibold"
                  >
                    <span>Start Writing</span>
                    <span className="ArrowIcon">
                      <GoArrowRight className="text-xl" />
                    </span>
                  </a>
                </div>
                <div className="w-1/3 md:flex hidden relative">
                  <img
                    className="absolute -bottom-10"
                    src="/person.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="xl:col-span-1 col-span-2">
              <div className="flex h-full flex-col bg-white gap-6 p-10">
                <div className="text-3xl font-semibold">
                  Your teaching & earning steps
                </div>
                <div className="grid grid-cols-2 sm:p-0 ps-3 gap-x-2 gap-y-6 w-full">
                  <div className="sm:col-span-1 col-span-2 ">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full shrink-0 w-12 h-12 flex justify-center items-center text-secondary-500 font-semibold text-2xl bg-secondary-100">
                        1
                      </div>
                      <div className="">Apply to become author</div>
                    </div>
                  </div>
                  <div className="sm:col-span-1 col-span-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full w-12 h-12 flex justify-center items-center text-success-500 font-semibold text-2xl bg-success-100">
                        2
                      </div>
                      <div className="">Build & edit your profile</div>
                    </div>
                  </div>
                  <div className="sm:col-span-1 col-span-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full w-12 h-12 flex justify-center items-center text-danger-500 font-semibold text-2xl bg-danger-100">
                        3
                      </div>
                      <div className="">Create your new article</div>
                    </div>
                  </div>
                  <div className="sm:col-span-1 col-span-2">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full w-12 h-12 flex justify-center items-center text-warning-500 font-semibold text-2xl bg-warning-100">
                        4
                      </div>
                      <div className="">Start teaching & earning</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-96 -z-10 bg-gray-50"></div>
        <div className="container mx-auto lg:px-10 px-4">
          <div className=" bg-white border border-gray-100">
            <div className="flex flex-col gap-6 items-center justify-between py-10 md:mx-12 mx-3">
              <div className="text-4xl mb-10 font-semibold">Top Writers</div>
              <div className="w-full">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, A11y, FreeMode]}
                  navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                  }}
                  freeMode={true}
                  spaceBetween={50}
                  slidesPerView={5}
                  // navigation={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1280: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                  // pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  // onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <TopWriter
                      writer={{
                        writerImg:
                          "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee",
                        writerName: "Devon Lane",
                        writerSpecialty: "Finance Expert",
                        rating: "4.6",
                        articleNum: "30",
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TopWriter
                      writer={{
                        writerImg:
                          "https://plus.unsplash.com/premium_photo-1689533448099-2dc408030f0f",
                        writerName: "Devon Lane",
                        writerSpecialty: "Finance Expert",
                        rating: "4.6",
                        articleNum: "30",
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TopWriter
                      writer={{
                        writerImg:
                          "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6",
                        writerName: "Devon Lane",
                        writerSpecialty: "Finance Expert",
                        rating: "4.6",
                        articleNum: "30",
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TopWriter
                      writer={{
                        writerImg:
                          "https://images.unsplash.com/photo-1668757195866-8124b34fa9e0",
                        writerName: "Devon Lane",
                        writerSpecialty: "Finance Expert",
                        rating: "4.6",
                        articleNum: "30",
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TopWriter
                      writer={{
                        writerImg:
                          "https://images.unsplash.com/photo-1592159945470-474d31a87d03",
                        writerName: "Devon Lane",
                        writerSpecialty: "Finance Expert",
                        rating: "4.6",
                        articleNum: "30",
                      }}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TopWriter
                      writer={{
                        writerImg:
                          "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee",
                        writerName: "Devon Lane",
                        writerSpecialty: "Finance Expert",
                        rating: "4.6",
                        articleNum: "30",
                      }}
                    />
                  </SwiperSlide>
                  {/* <bu className="custom-prev">
                    <GrPrevious />
                  </bu>
                  <div className="custom-next">
                    <GrNext />
                  </div> */}
                </Swiper>
              </div>
              <Link
                content={`Thousands of users waiting for a Articles. Start writing & earning now!.`}
                linkContent={`Become an Author`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  lg:px-10 px-4 py-20">
        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="lg:col-span-1 col-span-3 h-full">
            <div className="flex flex-col gap-4 h-full justify-center md:items-start items-center">
              <div className="text-3xl font-semibold">
                6.3k trusted companies
              </div>
              <div className="text-(--gray-600) text-sm md:text-start text-center">
                Nullam egestas tellus at enim ornare tristique. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra.
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-3">
            <div className="grid grid-cols-4 w-full gap-4">
              <Companies
                company={{
                  companyLogo: "/amg-co.png",
                }}
              />
              <Companies
                company={{
                  companyLogo: "/youtube.png",
                }}
              />
              <Companies
                company={{
                  companyLogo: "/google.png",
                }}
              />
              <Companies
                company={{
                  companyLogo: "/lenovo.png",
                }}
              />
              <Companies
                company={{
                  companyLogo: "/slack.png",
                }}
              />
              <Companies
                company={{
                  companyLogo: "/verizon.png",
                }}
              />
              <Companies
                company={{
                  companyLogo: "/lexmark.png",
                }}
              />
              <Companies
                company={{
                  companyLogo: "/microsoft.png",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-10 border-b border-gray-50/15">
        <div className="container mx-auto  lg:px-10 px-4 py-10">
          <div className="text-white">
            <div className="grid grid-cols-2 gap-y-8 w-full ">
              <div className="md:col-span-1 col-span-2">
                <div className="font-semibold w-4/5 text-4xl">
                  Start writing with 7.2k users around
                  <span className="text-primary-500"> the world</span>.
                </div>
              </div>
              <div className="md:col-span-1 col-span-2">
                <div className="flex  justify-between">
                  <div className="col-span-1 flex flex-col gap-2.5">
                    <div id="num-1" className="font-semibold text-4xl">
                      {countNum}K
                    </div>
                    <div className="text-gray-300">Online articles</div>
                  </div>
                  <div className="col-span-1 flex flex-col gap-2.5">
                    <div className="font-semibold text-4xl">26k</div>
                    <div className="text-gray-300">Certified authors</div>
                  </div>
                  <div className="col-span-1 flex flex-col gap-2.5">
                    <div className="font-semibold text-4xl">99.9%</div>
                    <div className="text-gray-300">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
