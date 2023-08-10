"use client";

import Information from "@/components/layout/information/information";

import ModalEditProfile from "@/components/ui/modal/modaleditprofile";

import SidebarMd from "@/components/layout/sidebar/sidebarmd";

import Sidebar from "@/components/layout/sidebar/sidebar";

import HoseinSedaqat from "@/assets/HoseinSedaqat.jpg";

import { useSelector } from "react-redux";

import { useEffect } from "react";

import Image from "next/image";

function Profile() {
  const tweets = useSelector<any, any>((store) => store.tweet.tweets);

  const profile_image = useSelector<any, any>(
    (store) => store.profile.profile_image
  );

  const new_profile_image = useSelector<any, any>(
    (store) => store.profile.new_profile_image
  );

  const switch_image = useSelector<any, any>(
    (store) => store.profile.switch_image
  );

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <Sidebar />
          <section
            className='col-md-5'
            id='profile'>
            <SidebarMd id='' />
            <main>
              <div className='profile-header'>
                <h5>Hosein Sedaqat</h5>
              </div>
              <div className='profile-edit'>
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
                <div>
                  <button
                    data-bs-toggle='modal'
                    data-bs-target='#editProfileModal'>
                    Edit profile
                  </button>
                </div>
              </div>
              <div className='profile-information'>
                <div>
                  <small className='fs-5'>Hosein Sedaqat</small>
                  <small className='text-muted'>@HoseinSedaqat</small>
                </div>
                <div>
                  <small className='text-muted'>
                    <i className='bi bi-geo-alt me-1'></i>
                    Bnd
                  </small>
                  <small className='text-muted'>
                    <i className='bi bi-calendar4-week me-1'></i>
                    Joined January 2022
                  </small>
                </div>
                <div>
                  <small>
                    <span className='me-1'>47</span>
                    <span className='text-muted'>Following</span>
                  </small>
                  <small>
                    <span className='me-1'>4</span>
                    <span className='text-muted'>Followers</span>
                  </small>
                </div>
                <div>
                  <small>Tweets</small>
                  <small className='text-muted'>Replies</small>
                  <small className='text-muted'>Highlights</small>
                  <small className='text-muted'>Media</small>
                  <small className='text-muted'>Likes</small>
                </div>
              </div>
              {tweets.map((tweet: any, idx: number) => (
                <div
                  className='tweet-message'
                  key={idx}>
                  <div className='tp'>
                    <Image
                      src={HoseinSedaqat}
                      alt='User-Profile-Img'
                    />
                    <div className='tp-data'>
                      <small className='mx-2 tweet-post-title'>
                        {tweet.name}
                      </small>
                      <small className='text-muted tweet-post-title'>
                        @{tweet.username}
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
                        <p className='text-muted mx-3'>
                          <i className='bi bi-heart'></i>
                          <small className='ms-2'>{tweet.likes}</small>
                        </p>
                        <p className='text-muted mx-3'>
                          <i className='bi bi-bar-chart'></i>
                          <small className='ms-2'>{tweet.trend}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='tp-dots'>
                    <p className='cursor-pointer'>...</p>
                  </div>
                </div>
              ))}
            </main>
          </section>
          <Information />
        </div>
      </div>
      <ModalEditProfile id='editProfileModal' />
    </>
  );
}

export default Profile;
