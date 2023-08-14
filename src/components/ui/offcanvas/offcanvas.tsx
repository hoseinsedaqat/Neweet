"use client";

import { useSelector, useDispatch } from "react-redux";

import { prepareImage } from "@/features/profileSlice";

import Logo from "@/assets/TwitterLogo.jpeg";

import { useEffect } from "react";

import Image from "next/image";

import Link from "next/link";

function OffCanvas() {
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
  useEffect(() => {
    dispatch(prepareImage());
    require("bootstrap/dist/js/bootstrap");
  }, [dispatch]);
  return (
    <>
      <header id='header-small'>
        {/* User profile image */}
        {switch_image ? (
          <Image
            src={profile_image}
            alt='User-profile-img'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasExample'
            aria-controls='offcanvasExample'
          />
        ) : (
          <picture>
            <img
              src={new_profile_image}
              alt='User-profile-img'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
              aria-controls='offcanvasExample'
              width={20}
              height={20}
            />
          </picture>
        )}
        {/* <Image
          src={profile_image}
          alt='User-profile-img'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasExample'
          aria-controls='offcanvasExample'
        /> */}
        <div>
          <Link href={"/"}>
            <Image
              className='TwitterXLogo'
              alt={"TwitterXLogo"}
              src={Logo}
            />
          </Link>
        </div>

        <div
          className='offcanvas offcanvas-start bg-x'
          tabIndex={-1}
          id='offcanvasExample'
          aria-labelledby='offcanvasExampleLabel'>
          <div className='offcanvas-header'>
            <Link href={"/"}>
              <Image
                className='TwitterXLogo'
                alt={"TwitterXLogo"}
                src={Logo}
              />
            </Link>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'></button>
          </div>
          <div className='offcanvas-body'>
            <ul>
              <li>
                <Link href={"/"}>
                  <div>
                    <i className='bi bi-house-door-fill fs-5'></i>
                  </div>
                  <div className='ms-3 fs-5'>Home</div>
                </Link>
              </li>
              <li>
                <Link href={"/explore"}>
                  <div>
                    <i className='bi bi-search fs-5'></i>
                  </div>
                  <div className='ms-3 fs-5'>Explore</div>
                </Link>
              </li>
              <li>
                <Link href={"/notifications"}>
                  <div>
                    <i className='bi bi-bell fs-5'></i>
                  </div>
                  <div className='ms-3 fs-5'>Notifications</div>
                </Link>
              </li>
              <li>
                <Link href={"/messages"}>
                  <div>
                    <i className='bi bi-envelope fs-5'></i>
                  </div>
                  <div className='ms-3 fs-5'>Messages</div>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <div>
                    <i className='bi bi-filter-square fs-5'></i>
                  </div>
                  <div className='ms-3 fs-5'>Lists</div>
                </Link>
              </li>
              <li>
                <Link href={"/bookmarks"}>
                  <div>
                    <i className='bi bi-bookmark fs-5'></i>
                  </div>
                  <div className='ms-3 fs-5'>Bookmarks</div>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <div>
                    <i className='bi bi-people fs-5'></i>
                  </div>
                  <div className='ms-3 fs-5'>Communities</div>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <div>
                    <i className='bi bi-patch-check fs-5'></i>
                  </div>
                  <div className='ms-3 fs-5'>Verified</div>
                </Link>
              </li>
              <li>
                <Link href={"/profile"}>
                  <div>
                    <i className='bi bi-person fs-5'></i>
                  </div>
                  <div className='ms-3 fs-5'>Profile</div>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <div>
                    <i className='bi bi-three-dots fs-5'></i>
                  </div>
                  <div className='ms-3 fs-5'>More</div>
                </Link>
              </li>
              <li>
                <button
                  type='button'
                  className='tweet-btn bg-primary'
                  data-bs-toggle='modal'
                  data-bs-target='#tweetModal'>
                  Post
                </button>
              </li>
              <li>
                <p>
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
                </p>
                <p className='ms-3'>
                  <span className='d-block'>
                    {username.length <= 15
                      ? username
                      : username.substring(0, 12) + "..."}
                  </span>
                  <span className='d-block'>
                    @
                    {userid.length <= 15
                      ? userid
                      : userid.substring(0, 10) + "..."}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default OffCanvas;
