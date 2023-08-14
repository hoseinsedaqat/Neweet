"use client";

import BookmarksLanding from "@/components/bookmarks/bookmarkslanding";

import Information from "@/components/layout/information/information";

import Sidebar from "@/components/layout/sidebar/sidebar";

import { useEffect } from "react";

function Bookmarks() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Sidebar />
          <BookmarksLanding />
          <Information />
        </div>
      </div>
    </>
  );
}

export default Bookmarks;
