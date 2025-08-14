import { useEffect, useState } from "react";
import Breadcrumb from "../website-component/Breadcrumb";
import Companies from "../website-component/Companies";
import Footer from "../website-component/Footer";
import Statistics from "../website-component/Statistics";
import Navbar from "../website-component/Navbar";
import Testimonials from "../website-component/Testimonials";

import { PiStudentDuotone } from "react-icons/pi";
import { PiCertificateDuotone } from "react-icons/pi";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { BiSolidLayer } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("https://tamkeen-dev.com/api/testimonials", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("err");
      })
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        console.log("finally");
      });
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumb currentPage={"About"} />
      <div className="container mx-auto lg:px-10 px-4">
        <div className="flex lg:flex-row flex-col lg:justify-between items-center xl:gap-28 gap-14 pt-20">
          <div className="flex flex-col gap-4 lg:w-1/2 lg:order-first order-last">
            <div className="font-semibold text-[80px] text-gray-100">
              2011-2025
            </div>
            <div className="xl:text-5xl text-4xl font-semibold lg:w-4/5">
              We share knowledge with the world
            </div>
            <div className="text-xl text-gray-600 lg:w-4/5">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Praesent fermentum quam mauris. Fusce tempor et augue a aliquet.
            </div>
          </div>
          <div className="flex lg:w-1/2 relative h-[400px]">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1690383922983-90d7a4658ef3"
              alt=""
            />
            <div className="w-4 h-full bg-white top-0 bottom-0 right-1/6 absolute"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:px-10 px-4 py-20">
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
      <div className="container mx-auto lg:px-10 px-4">
        <div className="grid md:grid-cols-15 grid-cols-2 gap-6 w-full pb-20">
          <Statistics
            statistic={{
              statisticIcon: (
                <PiStudentDuotone className="text-3xl text-primary-500" />
              ),
              statisticName: "Students",
              statisticNum: "67.1k",
            }}
          />
          <Statistics
            statistic={{
              statisticIcon: (
                <PiCertificateDuotone className="text-3xl text-secondary-500" />
              ),
              statisticName: "Certified Instructor",
              statisticNum: "26k",
            }}
          />
          <Statistics
            statistic={{
              statisticIcon: (
                <FaEarthAmericas className="text-3xl text-danger-500" />
              ),
              statisticName: "Country Language",
              statisticNum: "72",
            }}
          />
          <Statistics
            statistic={{
              statisticIcon: (
                <MdVerified className="text-3xl text-success-500" />
              ),
              statisticName: "Success Rate",
              statisticNum: "99.9%",
            }}
          />
          <Statistics
            statistic={{
              statisticIcon: (
                <BiSolidLayer className="text-3xl text-warning-500" />
              ),
              statisticName: "Students",
              statisticNum: "67.1k",
            }}
          />
          {/* <div className="lg:col-span-3 md:col-span-5 col-span-1">
              <div className="flex gap-2">
                <SvgIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-semibold">67.1k</div>
                  <div className="text-sm font-medium text-gray-700">
                    Students
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-5 col-span-1">
              <div className="flex gap-2">
                <SvgIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-semibold">67.1k</div>
                  <div className="text-sm font-medium text-gray-700">
                    Students
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-5 col-span-1">
              <div className="flex gap-2">
                <SvgIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-semibold">67.1k</div>
                  <div className="text-sm font-medium text-gray-700">
                    Students
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-5 col-span-1">
              <div className="flex gap-2">
                <SvgIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-semibold">67.1k</div>
                  <div className="text-sm font-medium text-gray-700">
                    Students
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-5 col-span-1">
              <div className="flex gap-2">
                <SvgIcon />
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-semibold">67.1k</div>
                  <div className="text-sm font-medium text-gray-700">
                    Students
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
      <div className="bg-primary-100 relative">
        <div className="container mx-auto lg:px-10 px-4">
          <div className="grid grid-cols-2 gap-10">
            <div className="md:col-span-1 col-span-2">
              <div className="flex justify-center pt-10 h-[400px]">
                <img className="" src="/two-person.png" alt="" />
              </div>
            </div>
            <div className="md:col-span-1 col-span-2">
              <div className="flex flex-col justify-center gap-4 py-10 h-full">
                <div className="text-primary-500 font-medium">
                  OUR ONE BILLION MISSION
                </div>
                <div className="font-semibold text-4xl">
                  Our one billion mission sounds bold, We agree.
                </div>
                <div className="text-gray-700">
                  "We cannot solve our problems with the same thinking we used
                  when we created them."—Albert Einstein. Institutions are slow
                  to change. Committees are where good ideas and innovative
                  thinking go to die. Choose agility over dogma. Embrace and
                  drive change. We need to wipe the slate clean and begin with
                  bold, radical thinking.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto lg:px-10 px-4">
          <div className="grid grid-cols-3 gap-y-20 gap-x-32 w-full py-20">
            <div className="xl:col-span-1 col-span-3">
              <div className="flex flex-col items-start gap-4 h-full justify-center">
                <div className="text-primary-500 font-medium">OUR GALLERY</div>
                <div className="font-semibold text-4xl">
                  We’ve been here almost 15 years
                </div>
                <div className="text-gray-700">
                  Fusce lobortis leo augue, sit amet tristique nisi commodo in.
                  Aliquam ac libero quis tellus venenatis imperdiet. Sed sed
                  nunc libero. Curabitur in urna ligula. torquent per conubia
                  nostra.
                </div>
                <a href="#" className="arrow-link primary-btn">
                  <span>Join our team</span>
                  <span className="ArrowIcon">
                    <GoArrowRight className="text-xl" />
                  </span>
                </a>
              </div>
            </div>
            <div className="xl:col-span-2 xl:order-last order-first col-span-3">
              <div className="">
                <img src="/grid-photo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:px-10 px-4">
        <div className="py-10">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <Testimonials
                  testimonial={{
                    userComment: item.body,
                    userName: item.full_name,
                    userImage: `https://tamkeen-dev.com/${item.image}`,
                  }}
                />
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <Testimonials
                testimonial={{
                  userComment:
                    "Great service! The articles were engaging and optimized for SEO. I appreciated the smooth communication and revisions. It made my job much easier.e",
                  userName: "Emily",
                  userSpecialize: "leader Of ",
                  userJobCompany: "TailwindCss",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                testimonial={{
                  userComment:
                    "As a content marketer, I’ve tried many writing services. This one stood out for its quality, fast delivery, and affordable pricing. I’m very satisfied.",
                  userName: "David",
                  userSpecialize: "Founder Of ",
                  userJobCompany: "Medium",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                testimonial={{
                  userComment:
                    "I ordered multiple articles for my travel blog, and they all turned out great. The writers understood my tone and audience well. I’ll be coming back for more.",
                  userName: "Olivia",
                  userSpecialize: "Founder Of ",
                  userJobCompany: "Swiper.js",
                }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials
                testimonial={{
                  userComment:
                    "I’ve used this article writing site for my blog, and the results were fantastic. The writers are professional, and the delivery is always on time. Highly recommended!",
                  userName: "James",
                  userSpecialize: "Founder Of ",
                  userJobCompany: "Swiper.js",
                }}
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
