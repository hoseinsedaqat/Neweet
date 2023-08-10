import SidebarMd from "@/components/layout/sidebar/sidebarmd";

import HoseinSedaqat from "@/assets/HoseinSedaqat.jpg";

import { useSelector } from "react-redux";

import Image from "next/image";

function Explores() {
  const tweets = useSelector<any, any>((store) => store.tweet.tweets);

  return (
    <>
      <section
        className='col-md-5'
        id='explore'>
        <SidebarMd id='' />
        <main>
          <div className='explore-header'>
            <div>
              <i className='bi bi-search text-muted'></i>
            </div>
            <input
              type='text'
              placeholder='Search Neweet'
              className='text-muted'
            />
          </div>
          {/* trends */}
          <div className='trends'>
            <h5>Trends for you</h5>
            <div className='d-flex align-items-center justify-content-between'>
              <p>
                <small className='d-block text-muted'>
                  Trending in England
                </small>
                <span className='d-block'>Nextjs</span>
                <small className='d-block text-muted'>457.9k tweets</small>
              </p>
              <p className='cursor-pointer'>...</p>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
              <p>
                <small className='d-block text-muted'>
                  Trending in England
                </small>
                <span className='d-block'>Nuxtjs</span>
                <small className='d-block text-muted'>331.9k tweets</small>
              </p>
              <p className='cursor-pointer'>...</p>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
              <p>
                <small className='d-block text-muted'>
                  Trending in England
                </small>
                <span className='d-block'>Diffrent</span>
                <small className='d-block text-muted'>254.1k tweets</small>
              </p>
              <p className='cursor-pointer'>...</p>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
              <p>
                <small className='d-block text-muted'>
                  Trending in England
                </small>
                <span className='d-block'>Music</span>
                <small className='d-block text-muted'>127.8k tweets</small>
              </p>
              <p className='cursor-pointer'>...</p>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
              <p>
                <small className='d-block text-muted'>
                  Trending in England
                </small>
                <span className='d-block'>Books</span>
                <small className='d-block text-muted'>78.6k tweets</small>
              </p>
              <p className='cursor-pointer'>...</p>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
              <p className='text-primary cursor-pointer'>show more</p>
            </div>
          </div>
          {/* Trending Post */}
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
                  <small className='mx-2 tweet-post-title'>{tweet.name}</small>
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
    </>
  );
}

export default Explores;
