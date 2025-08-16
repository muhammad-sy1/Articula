import React, { useEffect, useState } from "react";
import Navbar from "../website-component/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ArticlesPerType from "../website-component/ArticlesPerType";
import Footer from "../website-component/Footer";
import Breadcrumb from "../website-component/Breadcrumb";
import { NavLink } from "react-router";

const Articles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allArticles, setAllArticles] = useState([]);
  const cred = localStorage.getItem("credentials");
  useEffect(() => {
    fetch(
      `https://tamkeen-dev.com/api/blogs-api?items_per_page=50&sort_by=created_date&sort_order=DESC`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${cred}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("err");
      })
      .then((data) => {
        console.log(data);
        setAllArticles(data.rows);
        // console.log(allArticles);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let articleType = [
    { id: 1, arType: "Business" },
    {
      id: 2,
      arType: "Finance & Accounting",
    },
    {
      id: 3,
      arType: "Marketing",
    },
    {
      id: 4,
      arType: "IT & Software",
    },
    { id: 5, arType: "Business" },
    {
      id: 6,
      arType: "Finance & Accounting",
    },
    {
      id: 7,
      arType: "Marketing",
    },
    {
      id: 8,
      arType: "IT & Software",
    },
    { id: 9, arType: "Business" },
    {
      id: 10,
      arType: "Finance & Accounting",
    },
    {
      id: 11,
      arType: "Marketing",
    },
    {
      id: 12,
      arType: "IT & Software",
    },
  ];

  let articleTypeList = articleType.map((item, index) => {
    return (
      <SwiperSlide className="w-fit! m-3 relative">
        <div
          onClick={() => setActiveIndex(index)}
          className={`not-optional:cursor-pointer transition duration-200 ease-linear before:content-[''] before:flex before:absolute before:-bottom-3 before:left-0 before:w-0 before:h-[2px] flex text-gray-700 hover:text-gray-900 text-sm ${
            activeIndex === index
              ? "before:bg-gray-700 before:w-full text-gray-900"
              : "before:w-0"
          }`}
          key={index}
        >
          {item.arType}
        </div>
      </SwiperSlide>
    );
  });

  let authorSuggested = [
    {
      id: 1,
      name: "Ahmed",
      describe:
        "James is a journalist, author, investor, and entrepreneur. James is a journalist, author, investor, and entrepreneur.",
      imgURL: "https://images.unsplash.com/photo-1592159945470-474d31a87d03",
    },
    {
      id: 2,
      name: "Isam",
      describe: "James is a journalist, author, investor, and entrepreneur.",
      imgURL: "https://images.unsplash.com/photo-1668757195866-8124b34fa9e0",
    },
    {
      id: 3,
      name: "Osama",
      describe: "James is a jnd entrepreneur.",
      imgURL:
        "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6",
    },
    {
      id: 4,
      name: "Daived",
      describe:
        "James is a  journalist, author, investor, and journalist, author, investor, and entrepreneur.",
      imgURL:
        "https://plus.unsplash.com/premium_photo-1689533448099-2dc408030f0f",
    },
  ];

  let authorList = authorSuggested.map((item, key) => {
    return (
      <div
        key={key}
        className="flex justify-between items-start xl:gap-20 lg:gap-10 border-b pb-5 border-gray-200"
      >
        <a href="#" className="flex gap-3 items-start">
          <span className="size-8 rounded-full shrink-0 overflow-hidden">
            <img
              src={item.imgURL}
              alt=""
              className="size-full object-cover object-center"
            />
          </span>
          <span className="flex flex-col gap-1">
            <span className="font-bold">{item.name}</span>
            <span className="text-xs text-gray-300 line-clamp-2">
              {item.describe}
            </span>
          </span>
        </a>
        <div className="">
          <button className="rounded-3xl border px-3 py-2 cursor-pointer hover:text-white hover:bg-black transition duration-200">
            Follow
          </button>
        </div>
      </div>
    );
  });

  if (!cred) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col gap-y-5 mt-10 justify-center items-center">
          <div className="font-semibold text-2xl">Sign in to see all the articles ...</div>
          <NavLink to="/sign-in" className="primary-btn font-semibold">Sing in</NavLink>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Breadcrumb currentPage={"Articles"} />
      <div className="container mx-auto lg:px-10 px-4 my-5">
        <div className="grid grid-cols-3 w-full gap-x-20">
          <div className="lg:col-span-2 col-span-3 flex flex-col gap-y-3">
            <div className="border-b border-gray-100">
              <Swiper
                spaceBetween={30}
                slidesPerView="auto"
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {articleTypeList}
              </Swiper>
            </div>
            <div className="flex flex-col gap-y-3">
              {allArticles.map((item) => (
                <div key={item.id} className="content ">
                  <ArticlesPerType
                    article={{
                      authImg: "/y-person.jpg",
                      authName: item.author,
                      arTitle: item.title,
                      arBody: item.body,
                      arImg: `https://tamkeen-dev.com${item.field_image}`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1 lg:flex hidden sticky bottom-0">
            <div className="flex">
              <div className="flex flex-col gap-6">
                <div className="text-lg font-semibold">Who to follow</div>
                <div className="flex flex-col gap-4">{authorList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Articles;
