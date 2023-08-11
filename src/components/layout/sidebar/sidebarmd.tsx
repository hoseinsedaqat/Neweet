"use client";

import HoseinSedaqat from "@/assets/HoseinSedaqat.jpg";

import { useSelector, useDispatch } from "react-redux";

import { prepareImage } from "@/features/profileSlice";

import PropTypes, { InferProps } from "prop-types";

import Logo from "@/assets/TwitterLogo.jpeg";

import { useEffect } from "react";

import Image from "next/image";

import Link from "next/link";

const ComponentPropTypes = {
  id: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

function SidebarMd({ id }: ComponentTypes) {
  const dispatch = useDispatch();

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
  }, [dispatch]);
  return (
    <>
      <main className={id}>
        <div>
          <ul>
            <li>
              <Link href={"/"}>
                <div>
                  <Image
                    className='TwitterXLogo'
                    alt={"TwitterXLogo"}
                    src={Logo}
                  />
                  {/* <i className="bi bi-twitter fs-5"></i> */}
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <div>
                  <i className='bi bi-house-door-fill fs-5'></i>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/explore"}>
                <div>
                  <i className='bi bi-search fs-5'></i>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/notifications"}>
                <div>
                  <i className='bi bi-bell fs-5'></i>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/messages"}>
                <div>
                  <i className='bi bi-envelope fs-5'></i>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <div>
                  <i className='bi bi-filter-square fs-5'></i>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/bookmarks"}>
                <div>
                  <i className='bi bi-bookmark fs-5'></i>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <div>
                  <i className='bi bi-people fs-5'></i>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <div>
                  <i className='bi bi-patch-check fs-5'></i>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/profile"}>
                <div>
                  <i className='bi bi-person fs-5'></i>
                </div>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <div>
                  <i className='bi bi-three-dots fs-5'></i>
                </div>
              </Link>
            </li>
            <li>
              <button
                type='button'
                className='tweet-btn bg-primary'
                data-bs-toggle='modal'
                data-bs-target='#tweetModal'>
                <i className='bi bi-pencil-square'></i>
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
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default SidebarMd;
