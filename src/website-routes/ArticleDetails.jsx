import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../website-component/Navbar";

const ArticleDetails = () => {
  const [articleDetails, setArticleDetails] = useState();
  const [userId, setUserId] = useState();
  const [userDetails, setUserDetails] = useState();

  const { articleID } = useParams();

  useEffect(() => {
    fetch(`https://tamkeen-dev.com/api/node/${articleID}?_format=json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed !!!!");
        }
      })
      .then((data) => {
        console.log(data);
        setArticleDetails(data);
        setUserId(data.uid[0].target_id)
        console.log(data.uid[0].target_id);
      })
      .catch()
      .finally();
  }, [articleID]);

  useEffect(() => {
    fetch(`https://tamkeen-dev.com/api/user/${userId}?_format=json`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed !!!!");
        }
      })
      .then((data) => {
        console.log(data);
        setUserDetails(data);
        // console.log(articleDetails);
      })
      .catch()
      .finally();
  }, [userId]);

  if (!articleDetails) return <div>No product found</div>;

  return (
    <>
      <div className="flex flex-col gap-y-14">
        <Navbar />
        <div className="container mx-auto lg:px-80 px-4">
          <div className="flex flex-col justify-center gap-y-10">
            <div className="text-3xl font-bold">
              {articleDetails.title[0].value}
            </div>
            <div className="flex items-center gap-x-3">
              <div className="size-10 overflow-hidden rounded-full">
                <img
                  src={`https://tamkeen-dev.com${articleDetails.uid[0].url}`}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="">
                {userDetails.field_name[0].value}
              </div>
            </div>
            <div className="w-full h-96 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={`${articleDetails.field_image[0].url}`}
                alt=""
              />
            </div>
            <div className="">{articleDetails.body[0].processed}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleDetails;
