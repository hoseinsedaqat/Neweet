import { useSelector } from "react-redux";

import SidebarMd from "../layout/sidebar/sidebarmd";

import BookmarksImg from "@/assets/Bookmarks.png";

import Image from "next/image";

function BookmarksLanding() {
  const userid = useSelector<any, any>((store) => store.profile.userid);
  return (
    <>
      <section
        className='col-md-5'
        id='bookmarks'>
        <SidebarMd id='' />
        <main>
          <div className='bookmarks-header d-flex flex-column p-2'>
            <h5>Bookmarks</h5>
            <small className='text-muted'>
              @{userid.length <= 15 ? userid : userid.substring(0, 10) + "..."}
            </small>
          </div>
          <div className='bookmarks-save'>
            <div>
              <Image
                src={BookmarksImg}
                alt='Booksmarks-Img'
              />
            </div>
            <div>
              <h4>Save Tweets for later</h4>
              <p className='text-muted'>
                Don’t let the good ones fly away! Bookmark Tweets to easily find
                them again in the future.
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default BookmarksLanding;
