import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Testimonials = ({ testimonial }) => {
  const { userComment, userName, userImage } = testimonial;
  return (
    <>
      <div className="flex flex-col gap-y-8">
        <div className="p-6 flex flex-col gap-4 bg-gray-50 relative h-96">
          <div className="absolute border-l-16 border-b-16 rotate-45 border-gray-50 -bottom-2 left-1/2"></div>
          <div className="place-items-start">
            <BiSolidQuoteAltLeft className="text-4xl text-primary-500" />
          </div>
          <div
            className="text-center text-lg"
            dangerouslySetInnerHTML={{ __html: userComment }}
          />
          <div className="place-items-end">
            <BiSolidQuoteAltRight className="text-4xl text-primary-500" />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="font-medium">{userName}</div>
          <div className="flex rounded-full overflow-hidden size-20">
            <img src={userImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
