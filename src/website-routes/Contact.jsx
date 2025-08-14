import React, { useState } from "react";
import Breadcrumb from "../website-component/Breadcrumb";
// import Swiper core and required modules
import { FreeMode } from "swiper/modules";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// Import Swiper React components
import Navbar from "../website-component/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
import { Button } from "../components/ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import { MdOutlineEmail } from "react-icons/md";

import Footer from "../website-component/Footer";
import Branches from "../website-component/Branches";

const Contact = () => {
  const email = "example@email.com";

  // const handleCopy = () => {
  //   navigator.clipboard
  //     .writeText(email)
  //     .then(() => alert("Email Copied 😊"))
  //     .catch(() => alert("Something Went Wrong"));
  // };

  const [width] = useState(window.innerWidth);

  return (
    <>
      <Navbar />
      <Breadcrumb currentPage={"Contact"} />
      <div className=" border-b border-primary-100">
        <div className="container mx-auto  lg:px-10 px-4">
          <div className="grid grid-cols-2 w-full">
            <div className="md:col-span-1 col-span-2 h-full">
              <div className="flex flex-col items-start justify-center h-full py-8">
                <div className="flex flex-col items-start justify-center h-full lg:w-4/5 gap-4">
                  <div className="font-semibold text-5xl">Connect with us</div>
                  <div className="text-gray-700 text-lg">
                    Want to chat? We’d love to hear from you! Get in touch with
                    our Customer Success Team to inquire about speaking events,
                    advertising rates, or just say hello.
                  </div>
                  <Button
                    className="primary-btn rounded-none! text-base!"
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard
                        .writeText(email)
                        .then(toast.success("Event has been created"));
                    }}
                  >
                    <MdOutlineEmail className="text-lg" />
                    Copy Email
                  </Button>
                  <Toaster
                    toastOptions={{
                      style: {
                        borderRadius: "0",
                      },
                    }}
                    richColors
                    closeButton
                    duration="2000"
                    visibleToasts
                    position="top-center"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-1 col-span-2 md:order-last order-first">
              <div className="flex h-full justify-center items-end">
                <div className="h-[400px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-top"
                    src="/person.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  lg:px-10 px-4">
        <div className="flex flex-col items-center gap-6 py-20">
          <div className="font-semibold text-4xl text-center">
            Our branches all over the world.
          </div>
          <div className="text-lg text-gray-700 text-center">
            Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna,
            imperdiet id leo quis, luctus auctor nisi.
          </div>
          {width < 786 ? (
            <div className="w-full">
              <Swiper
                spaceBetween={10}
                freeMode={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1.75,
                  },
                  500: {
                    slidesPerView: 1.75,
                  },
                }}
                modules={[FreeMode]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <Branches
                    branch={{
                      branchImg:
                        "https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3",
                      branchCity: "Damascus, Syria",
                      branchDetails: "Lorem Ipsum dol",
                      branchAddress: "Dui auto iru, No. 6548",
                    }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Branches
                    branch={{
                      branchImg:
                        "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f",
                      branchCity: "Dubai, UAE",
                      branchDetails: "Lorem Ipsum doller",
                      branchAddress: "Duis aute irure, No. 6548",
                    }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Branches
                    branch={{
                      branchImg:
                        "https://plus.unsplash.com/premium_photo-1670176447308-41ce514dd228",
                      branchCity: "Los Angeles, USA",
                      branchDetails: "Lorem Ipsum doller",
                      branchAddress: "Duis aute irure, No. 6548",
                    }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Branches
                    branch={{
                      branchImg:
                        "https://plus.unsplash.com/premium_photo-1670176447246-02bf3259c00e",
                      branchCity: "Paris, France",
                      branchDetails: "Lorem Ipsum doller",
                      branchAddress: "Duis aute irure, No. 6548",
                    }}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          ) : (
            <div className="grid grid-cols-4 w-full gap-6">
              <Branches
                branch={{
                  branchImg:
                    "https://plus.unsplash.com/premium_photo-1680582107403-04dfac02efc3",
                  branchCity: "Damascus, Syria",
                  branchDetails: "Lorem Ipsum doller",
                  branchAddress: "Duis aute irure, No. 6548",
                }}
              />
              <Branches
                branch={{
                  branchImg:
                    "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f",
                  branchCity: "Dubai, UAE",
                  branchDetails: "Lorem Ipsum doller",
                  branchAddress: "Duis aute irure, No. 6548",
                }}
              />
              <Branches
                branch={{
                  branchImg:
                    "https://plus.unsplash.com/premium_photo-1670176447308-41ce514dd228",
                  branchCity: "Los Angeles, USA",
                  branchDetails: "Lorem Ipsum doller",
                  branchAddress: "Duis aute irure, No. 6548",
                }}
              />
              <Branches
                branch={{
                  branchImg:
                    "https://plus.unsplash.com/premium_photo-1670176447246-02bf3259c00e",
                  branchCity: "Paris, France",
                  branchDetails: "Lorem Ipsum doller",
                  branchAddress: "Duis aute irure, No. 6548",
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto lg:px-10 px-4">
          <div className="flex flex-col items-center gap-y-10 py-20">
            <div className="text-4xl font-semibold">Contact Us</div>
            <div className="grid grid-cols-2 w-full gap-20">
              <div className="lg:col-span-1 col-span-2">
                <div className="flex flex-col gap-y-10">
                  <div className="text-2xl">
                    Will you be in Los Angeles or any other branches any time
                    soon? Stop by the office! We'd love to meet.
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start border-b gap-x-20 border-gray-100 pb-8">
                      <div className="font-medium text-primary-500 w-1/4">
                        Address
                      </div>
                      <div className="flex-1">
                        Excepteur sint occaecat cupidatat non proiden. Excepteur
                        sint occaecat.
                      </div>
                    </div>
                    <div className="flex items-start border-b gap-x-20 border-gray-100 pb-8">
                      <div className="font-medium text-primary-500 w-1/4">
                        Phone Number
                      </div>
                      <div className="flex flex-col">
                        <div className="">(963) 950-0001</div>
                        <div className="">(963) 950-0001</div>
                      </div>
                    </div>
                    <div className="flex items-start border-b gap-x-20 border-gray-100 pb-8">
                      <div className="font-medium text-primary-500 w-1/4">
                        Email address
                      </div>
                      <div className="flex flex-col">
                        <div className="">Info@articula.com</div>
                        <div className="">Info@articula.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 col-span-2">
                <form className="bg-white p-8">
                  <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-2xl">Get In touch</h2>
                    <p className="mt-1 text-gray-500">
                      Feel free contact with us, we love to make new partners &
                      friends
                    </p>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="">
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="First name..."
                            className=""
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="">
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Last name..."
                            className=""
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-6">
                        <label htmlFor="email" className="">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className=""
                          />
                        </div>
                      </div>
                      <div className="col-span-full">
                        <label htmlFor="street-address" className="">
                          Subject
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="street-address"
                            id="street-address"
                            placeholder="Message Subject"
                          />
                        </div>
                      </div>
                      <div className="col-span-full">
                        <label htmlFor="about" className="">
                          Message
                        </label>
                        <div className="mt-2">
                          <textarea
                            name="about"
                            id="about"
                            rows="3"
                            placeholder="Message Subject"
                            className="resize-none h-40"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-span-full">
                        <button className="primary-btn">
                          <span>Send Message</span>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <MapContainer
          center={[25.276987, 55.296249]}
          zoom={10}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[25.276987, 55.296249]}>
            <Popup>Welcome to the map</Popup>
          </Marker>
        </MapContainer>
        {/* <APIProvider >
          <Map
            style={{ width: "100vw", height: "100vh" }}
            defaultCenter={{ lat: 22.54992, lng: 0 }}
            defaultZoom={3}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          />
        </APIProvider> */}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
