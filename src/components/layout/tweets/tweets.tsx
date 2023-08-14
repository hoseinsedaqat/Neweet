"use client";

import { likeTweet, unLikeTweet } from "@/features/tweetSlice";

import { useValidation } from "react-simple-form-validator";

import { toast_features } from "@/constants/toastfeatures";

import { prepareImage } from "@/features/profileSlice";

import { ToastContainer, toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";

import { deleteTweet } from "@/features/tweetSlice";

import { addTweet } from "@/features/tweetSlice";

import SidebarMd from "../sidebar/sidebarmd";

import { useState, useEffect } from "react";

import Image from "next/image";

function Tweets() {
  const tweets = useSelector<any, any>((store) => store.tweet.tweets);

  const dispatch = useDispatch();

  const username = useSelector<any, any>((store) => store.profile.username);

  const userid = useSelector<any, any>((store) => store.profile.userid);

  const profile_image = useSelector<any, any>(
    (store) => store.profile.profile_image
  );

  const new_profile_image = useSelector<any, any>(
    (store) => store.profile.new_profile_image
  );

  const switch_image = useSelector<any, any>(
    (store) => store.profile.switch_image
  );

  const [tweetText, setTweetText] = useState("");

  const [files, setFiles] = useState("");
  // validation Form
  const { isFormValid } = useValidation({
    fieldsRules: {
      tweetText: { required: true },
      files: { required: false },
    },
    state: { files, tweetText },
  });

  function addPost(text: any) {
    if (isFormValid) {
      dispatch(
        addTweet({
          tweetText: text,
          files,
        })
      );

      setTweetText("");
      setFiles("");
    } else {
      toast.info("Please enter your toughts ✌😎", toast_features as any);
    }
  }

  function selectedImg(e: any) {
    try {
      var reader = new FileReader();
      reader.onload = () => {
        setFiles(reader.result as string);
      };

      reader.readAsDataURL(e.target.files[0]);
    } catch (e) {
      toast.error("Image Size is Large 💀", toast_features as any);
    }
  }

  useEffect(() => {
    dispatch(prepareImage());
  }, [dispatch]);

  return (
    <>
      <section
        className='col-md-5'
        id='tweets'>
        <SidebarMd id='' />
        <main>
          <div className='header-filter w-100'>
            <p>For you</p>
            <p>Following</p>
          </div>
          <div className='add-tweet'>
            <div>
              {/* User profile image */}
              {switch_image ? (
                <Image
                  src={profile_image}
                  alt='User-Profile-Img'
                />
              ) : (
                <picture>
                  <img
                    src={new_profile_image}
                    alt='User-Profile-Img'
                    width={20}
                    height={20}
                  />
                </picture>
              )}
            </div>
            <div className='w-100'>
              <textarea
                name='tweet'
                id='tweet-textarea'
                cols={35}
                rows={5}
                placeholder='What is happening?!'
                value={tweetText}
                onChange={(e) => setTweetText(e.target.value)}
                className='w-100'
                maxLength={100}></textarea>
              {files !== "" ? (
                <picture>
                  <img
                    src={files}
                    alt='awesome-test'
                    className='my-2 tweet-preview-img'
                  />
                </picture>
              ) : (
                ""
              )}
              <div className='tweet-features'>
                <p>
                  <label htmlFor='tweet-add-post'>
                    <i className='bi bi-image text-primary'></i>
                    <input
                      type='file'
                      id='tweet-add-post'
                      className='d-none'
                      onChange={selectedImg}
                    />
                  </label>
                  <i className='bi bi-filetype-gif text-primary'></i>
                  <i className='bi bi-ui-radios text-primary'></i>
                  <i className='bi bi-calendar4-event text-primary'></i>
                  <i className='bi bi-geo-alt-fill text-primary'></i>
                </p>
                <button
                  className='bg-primary'
                  onClick={() => addPost(tweetText)}>
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className='show-tweet'>
            <p className='text-primary text-center my-2'>Show 105 Tweets</p>
          </div>
          {tweets.length > 0 ? (
            <>
              {tweets.map((tweet: any, idx: number) => (
                <div
                  className='tweet-message'
                  key={idx}>
                  <div className='tp'>
                    {/* User profile image */}
                    {switch_image ? (
                      <Image
                        src={profile_image}
                        alt='User-Profile-Img'
                      />
                    ) : (
                      <picture>
                        <img
                          src={new_profile_image}
                          alt='User-Profile-Img'
                          width={20}
                          height={20}
                        />
                      </picture>
                    )}
                    <div className='tp-data'>
                      <small className='mx-2 tweet-post-title'>
                        {username.length <= 15
                          ? username
                          : username.substring(0, 12) + "..."}
                      </small>
                      <small className='text-muted tweet-post-title'>
                        @
                        {userid.length <= 15
                          ? userid
                          : userid.substring(0, 10) + "..."}
                      </small>
                      <small className='ms-1 text-muted tweet-post-title'>
                        .{tweet.time}
                      </small>
                      <div className='px-2 py-2'>
                        <small>{tweet.text}</small>
                      </div>
                      <div>
                        {/* if image is empty i don't want to show it */}
                        {tweet.img == "" ? (
                          ""
                        ) : (
                          <>
                            {tweet.buildby === "admin" ? (
                              <Image
                                src={tweet.img}
                                alt='User-Tweet-Img'
                                className='my-2'
                              />
                            ) : (
                              <picture>
                                <img
                                  src={tweet.img}
                                  alt='User-Tweet-Img'
                                  className='my-2'
                                />
                              </picture>
                            )}
                          </>
                        )}
                      </div>
                      <div className='d-flex tweet-post-sm'>
                        <p className='text-muted me-3'>
                          <i className='bi bi-chat'></i>
                          <small className='ms-2'>{tweet.comments}</small>
                        </p>
                        <p className='text-muted mx-3'>
                          <i className='bi bi-arrow-90deg-left'></i>
                          <small className='ms-2'>{tweet.forward}</small>
                        </p>
                        {!tweet.addLike ? (
                          <>
                            <p
                              className='text-muted mx-3 cursor-pointer'
                              onClick={() => dispatch(likeTweet(idx))}>
                              <i className='bi bi-heart'></i>
                              <small className='ms-2'>{tweet.likes}</small>
                            </p>
                          </>
                        ) : (
                          <>
                            <p
                              className='text-muted mx-3 cursor-pointer'
                              onClick={() => dispatch(unLikeTweet(idx))}>
                              <i className='bi bi-heart-fill text-danger'></i>
                              <small className='ms-2'>{tweet.likes}</small>
                            </p>
                          </>
                        )}
                        <p className='text-muted mx-3'>
                          <i className='bi bi-bar-chart'></i>
                          <small className='ms-2'>{tweet.trend}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='tp-dots dropdown'>
                    <p
                      className='cursor-pointer'
                      data-bs-toggle='dropdown'
                      aria-expanded='true'>
                      ...
                    </p>
                    <ul className='dropdown-menu'>
                      <li
                        className='cursor-pointer'
                        onClick={() => dispatch(deleteTweet(idx))}>
                        <i className='bi bi-trash3-fill text-danger mx-2'></i>
                        <small className='text-white'>Delete</small>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className='tweet-message d-flex align-items-center justify-content-center my-3'>
                <p className='text-center'>
                  Come on Share your First Tweet ✌😎
                </p>
              </div>
            </>
          )}
        </main>
        <ToastContainer />
      </section>
    </>
  );
}

export default Tweets;
