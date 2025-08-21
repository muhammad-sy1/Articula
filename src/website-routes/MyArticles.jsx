import React, { useEffect, useState } from "react";
import Navbar from "../website-component/Navbar";
import Footer from "../website-component/Footer";

import { AiTwotoneEdit } from "react-icons/ai";
import { PiTrashDuotone } from "react-icons/pi";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import ArticlesPerType from "../website-component/ArticlesPerType";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const MyArticles = () => {
  const [open, setOpen] = useState(false);
  const [myArticles, setMyArticles] = useState([]);
  const [articleCategory, setArticleCategory] = useState([]);
  const [articleTags, setArticleTags] = useState([]);
  const [articleImageID, setArticleImageID] = useState();
  const [xCsrfToken, setXCsrfToken] = useState("");
  const [articleImage, setArticleImage] = useState(null);
  const [tagId, setTagId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const cred = localStorage.getItem("credentials");

  const articleData = JSON.stringify({
    type: [
      {
        target_id: "blog",
      },
    ],
    title: [
      {
        value: formData.title,
      },
    ],
    body: [
      {
        value: formData.body,
        format: "basic_html",
      },
    ],
    field_image: [
      {
        target_id: articleImageID,
      },
    ],
    field_gallery: [
      {
        target_id: 202,
      },
      {
        target_id: 180,
      },
    ],
    field_tags: [
      {
        target_id: tagId,
      },
    ],
    field_category: [
      {
        target_id: categoryId,
      },
    ],
  });

  const handleArticleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setArticleImage(file);
    getCsrfToken();
    // postArticle();
  };

  const getMyArticleList = () => {
    fetch("https://tamkeen-dev.com/api/blogs-api-current-user", {
      method: "GET",
      headers: {
        Authorization: `Basic ${cred}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("err");
      })
      .then((data) => {
        // console.log(data);
        setMyArticles(data.rows);
        // console.log(myArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMyArticleList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCsrfToken = async () => {
    try {
      const response = await fetch(
        "https://tamkeen-dev.com/api/session/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch CSRF token");
      }

      const data = await response.text();
      setXCsrfToken(data);
      console.log(data);
      // console.log(xCsrfToken);
    } catch (err) {
      console.log(err);
    } finally {
      // console.log("finally");
    }
  };

  useEffect(() => {
    if (articleImage && xCsrfToken) {
      postArticle();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleImage, xCsrfToken]);

  const postArticle = () => {
    fetch(
      "https://tamkeen-dev.com/api/file/upload/node/blog/field_image?_format=json",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${cred}`,
          "Content-Type": "application/octet-stream",
          "Content-Disposition": `file; filename="${articleImage.name}"`,
          "X-CSRF-Token": xCsrfToken,
        },
        body: articleImage,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setArticleImageID(data.fid[0].value);
        console.log(data.fid[0].value);
      })
      .catch((err) => {
        err.message;
      });
  };

  const fetchTagsAndCategories = () => {
    fetch("https://tamkeen-dev.com/api/terms/tags")
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("err");
      })
      .then((data) => {
        // console.log(data);
        setArticleTags(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // console.log("finally");
      });

    fetch("https://tamkeen-dev.com/api/terms/category")
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("err");
      })
      .then((data) => {
        // console.log(data);
        setArticleCategory(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // console.log("finally");
      });
  };

  const fetchArticle = () => {
    fetch("https://tamkeen-dev.com/api/node?_format=json", {
      method: "POST",
      headers: {
        Authorization: `Basic ${cred}`,
        "Content-Type": "application/json",
        "X-CSRF-Token": xCsrfToken,
      },
      body: articleData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        err.message;
      });
  };

  const handleDelete = (postID) => {
    console.log(postID);
    fetchDelete(postID);
  };

  const fetchDelete = (postID) => {
    console.log(`Here: ${postID}`);
    fetch(`https://tamkeen-dev.com/api/node/${postID}?_format=json`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${cred}`,
        "X-CSRF-Token": xCsrfToken,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        getMyArticleList();
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  const errorMessage = () => {
    return (
      <>
        <div className="">error</div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto xl:px-10 px-4 pt-5">
        <div className="text-4xl font-semibold text-center">My Articles</div>
        <div className="lg:px-40 my-4 flex flex-col gap-y-3">
          <div className="grid grid-cols-6 gap-5">
            <div className="md:col-span-5 col-span-6 text-lg font-semibold">
              Articles
            </div>
            <div className="md:col-span-1 col-span-1 hidden md:flex gap-x-5 justify-center items-center">
              <div className="w-1/2 flex justify-center text-lg font-semibold">
                Edit
              </div>
              <div className="w-1/2 flex justify-center text-lg font-semibold">
                Delete
              </div>
            </div>
            {myArticles.map((item) => (
              <div className="contents" key={item.id}>
                <div className="md:col-span-5 col-span-6">
                  <ArticlesPerType
                    article={{
                      authName: `${item.author}`,
                      arTitle: `${item.title}`,
                      arBody: `${item.body}`,
                      arImg: `https://tamkeen-dev.com/${item.field_image}`,
                    }}
                  />
                </div>
                <div className="md:col-span-1 col-span-1 flex md:gap-x-5 gap-x-1 justify-center items-center">
                  <button className="cursor-pointer w-1/2 flex justify-center">
                    <AiTwotoneEdit className="text-secondary-500 text-2xl" />
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="cursor-pointer w-1/2 flex justify-center"
                  >
                    <PiTrashDuotone className="text-danger-500 text-2xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <form
            // onSubmit={() => setOpen(true)}
            >
              <DialogTrigger asChild>
                <button
                  onClick={fetchTagsAndCategories}
                  className="text-xl font-semibold w-full py-2 border-0 rounded-none hover:bg-gray-500/10 hover:text-primary-500 transition cursor-pointer flex items-center justify-center gap-x-2"
                  variant="outline"
                >
                  <IoAddCircleOutline className="text-xl" />
                  Add Article
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] rounded-none">
                <DialogHeader>
                  <DialogTitle>Add Article</DialogTitle>
                  <DialogDescription>
                    Click add when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 overflow-auto h-[70vh] px-2">
                  <div className="grid gap-3">
                    <label htmlFor="title">Title</label>
                    <input
                      id="title"
                      name="name"
                      required
                      placeholder="Article title"
                      value={formData.title}
                      onInput={(e) => {
                        setFormData({
                          ...formData,
                          title: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="articleBody">Article body</label>
                    <textarea
                      value={formData.body}
                      required
                      onInput={(e) => {
                        setFormData({
                          ...formData,
                          body: e.target.value,
                        });
                      }}
                      name=""
                      id="articleBody"
                      className="resize-none h-80"
                      placeholder="Article body"
                    ></textarea>
                  </div>
                  <div className="grid gap-3">
                    <label className="">Article image</label>
                    <label
                      htmlFor="articleImg"
                      className="cursor-pointer flex! items-center gap-x-1 w-full primary-btn"
                    >
                      <LuUpload className="" />
                      <span className="">Upload image</span>
                    </label>
                    <input
                      required
                      type="file"
                      name=""
                      id="articleImg"
                      className="hidden!"
                      accept="image/*"
                      onChange={handleArticleImage}
                    />
                    {articleImage && (
                      <div className="line-clamp-1 text-success-500">
                        Selected file: {articleImage.name}
                      </div>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <label className="">Article gallery</label>
                    <label
                      htmlFor="articleGallery"
                      className="cursor-pointer flex! items-center gap-x-1 w-full primary-btn"
                    >
                      <LuUpload className="" />
                      <span className="">Upload gallery images</span>
                    </label>
                    <input
                      type="file"
                      name=""
                      id="articleGallery"
                      className="hidden!"
                      multiple
                      // onChange={handleArticleImage}
                    />
                  </div>
                  <div className="grid gap-3">
                    <label>Chose Tag</label>
                    <Select
                      onValueChange={(value) => {
                        setTagId(value);
                      }}
                    >
                      <SelectTrigger className="w-[180px] rounded-none">
                        <SelectValue placeholder="Select a tag" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectGroup>
                          <SelectLabel>Tags</SelectLabel>
                          {articleTags.map((item) => (
                            <SelectItem
                              key={item.id}
                              value={item.id}
                              className="rounded-none"
                            >
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <label>Chose category</label>
                    <Select
                      onValueChange={(value) => {
                        setCategoryId(value);
                      }}
                    >
                      <SelectTrigger className="w-[180px] rounded-none">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectGroup>
                          <SelectLabel className="rounded-none">
                            Category
                          </SelectLabel>
                          {articleCategory.map((item) => (
                            <SelectItem
                              key={item.id}
                              value={item.id}
                              className="rounded-none"
                            >
                              {item.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {/* <div className="">{errorMessage()}</div> */}
                <DialogFooter>
                  <DialogClose asChild>
                    <button
                      className="text-sm rounded-none font-semibold px-[18px] py-2 cursor-pointer border hover:bg-gray-50 transition-colors duration-200 ease-linear"
                      variant="outline"
                    >
                      Cancel
                    </button>
                  </DialogClose>
                  <button
                    onClick={
                      categoryId &&
                      tagId &&
                      articleImageID &&
                      formData.body &&
                      formData.title
                        ? fetchArticle
                        : errorMessage
                    }
                    className="text-sm rounded-none primary-btn hover:shadow-none!"
                    type="submit"
                  >
                    Add
                  </button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyArticles;
