import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../website-component/Navbar";
import Footer from "../website-component/Footer";

const ArticleDetails = () => {
  const [articleDetails, setArticleDetails] = useState();
  // const [userId, setUserId] = useState();
  const [categoryName, setCategoryName] = useState(null);
  const [userDetails, setUserDetails] = useState();
  // const [tagId, setTagId] = useState();
  const [tags, setTags] = useState([]);
  const [isAuth, setIsAuth] = useState(Boolean);
  // const [tags, setTags] = useState([]);
  const cred = localStorage.getItem("credentials");

  const { articleID } = useParams();

  useEffect(() => {
    fetch(`https://tamkeen-dev.com/api/node/${articleID}?_format=json`)
      .then((res) => res.json())
      .then((articleData) => {
        setArticleDetails(articleData);
        setIsAuth(true);
        const uid = articleData.uid?.[0]?.target_id;
        // setTagId(articleData.field_tags?.[0]?.target_id);
        if (uid) {
          fetch(`https://tamkeen-dev.com/api/user/${uid}?_format=json`, {
            method: "GET",
            headers: {
              Authorization: `Basic ${cred}`,
              "Content-Type": "application/json",
            },
          })
            .then((res) => res?.json())
            .then((userData) => {
              // console.log(userData);
              setUserDetails(userData);
            });
        }

        const categoryId = articleData?.field_category?.[0]?.target_id;

        if (categoryId) {
          fetch(
            `https://tamkeen-dev.com/api/taxonomy/term/${categoryId}?_format=json`
          )
            .then((res) => res.json())
            .then((categoryData) => {
              setCategoryName(categoryData.name?.[0]?.value);
            });
        }

        const tagIds =
          articleData?.field_tags?.map((tag) => tag.target_id) || [];
        Promise.all(
          tagIds.map((id) =>
            fetch(
              `https://tamkeen-dev.com/api/taxonomy/term/${id}?_format=json`
            )
              .then((res) => res.json())
              .then((tagData) => tagData.name?.[0]?.value)
          )
        ).then((tagNames) => setTags(tagNames));
      })

      .catch(console.error);
  }, [articleID, cred]);

  if (!isAuth) {
    return (
      <>
        <div></div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-y-14">
        <Navbar />
        <div className="container mx-auto lg:px-80 px-4">
          <div className="flex flex-col justify-center gap-y-10">
            <div className="uppercase px-2 py-1 rounded-4xl bg-gray-50 w-fit">
              {categoryName}
            </div>
            <div className="text-3xl font-bold">
              {articleDetails.title[0].value}
            </div>
            <div className="flex items-center gap-x-3">
              <div className="size-10 overflow-hidden rounded-full bg-gray-50">
                <img
                  src={`https://tamkeen-dev.com${articleDetails.uid[0].url}`}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="">
                {userDetails?.field_name?.[0]?.value}{" "}
                {userDetails?.field_surname?.[0]?.value}
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
            <div className="flex gap-x-3">
              {tags.map((item, index) => (
                <div key={index} className="px-2 py-1 rounded-4xl bg-gray-50">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ArticleDetails;
