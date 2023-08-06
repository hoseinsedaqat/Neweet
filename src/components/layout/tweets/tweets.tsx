"use client";
import HoseinSedaqat from "@/assets/HoseinSedaqat.jpg";
// import ModernFamily from '@/assets/ModernFamily.jpg'
import Image from "next/image";
import SidebarMd from "../sidebar/sidebarmd";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTweet } from "@/features/tweetSlice";

function Tweets() {
  const tweets = useSelector<any, any>((store) => store.tweet.tweets);
  const dispatch = useDispatch();
  const [tweetText, setTweetText] = useState("");
  const [files, setFiles] = useState("");
  function addPost(text: any) {
    dispatch(
      addTweet({
        tweetText: text,
        files,
      })
    );

    setTweetText("");
    setFiles("");
  }

  function selectedImg(e: any) {
    try {
      var reader = new FileReader();
      reader.onload = () => {
        setFiles(reader.result as string);
      };

      reader.readAsDataURL(e.target.files[0]);
    } catch (e) {
      console.log(e);
      alert("Image Size is Large");
    }
  }

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
              <Image
                src={HoseinSedaqat}
                alt='User-Profile-Img'
              />
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
                    .14h
                  </small>
                  <div className='px-2 py-2'>
                    <small>{tweet.text}</small>
                  </div>
                  <div>
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
                  </div>
                  <div className='d-flex tweet-post-sm'>
                    <p className='text-muted me-3'>
                      <i className='bi bi-chat'></i>
                      <small className='ms-2'>234</small>
                    </p>
                    <p className='text-muted mx-3'>
                      <i className='bi bi-arrow-90deg-left'></i>
                      <small className='ms-2'>145</small>
                    </p>
                    <p className='text-muted mx-3'>
                      <i className='bi bi-heart'></i>
                      <small className='ms-2'>2,124</small>
                    </p>
                    <p className='text-muted mx-3'>
                      <i className='bi bi-bar-chart'></i>
                      <small className='ms-2'>327k</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className='tp-dots'>
                <p className='cursor-pointer'>...</p>
              </div>
            </div>
          ))}
          {/* <div className="tweet-message">
              <div className='tp'>
                <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                <div className="tp-data">
                  <small className='mx-2 tweet-post-title'>Hosein Sedaqat</small>
                  <small className='text-muted tweet-post-title'>@HoseinSedaqat</small>
                  <small className='ms-1 text-muted tweet-post-title'>.14h</small>
                  <div className='px-2 py-2'>
                    <small>this is awesome</small>
                  </div>
                  <div>
                    <Image src={ModernFamily} alt='User-Tweet-Img' className='my-2'/>
                  </div>
                  <div className='d-flex tweet-post-sm'>
                    <p className='text-muted me-3'>
                      <i className="bi bi-chat"></i>
                      <small className='ms-2'>234</small>
                    </p>
                    <p className='text-muted mx-3'>
                      <i className="bi bi-arrow-90deg-left"></i>
                      <small className='ms-2'>145</small>
                    </p>
                    <p className='text-muted mx-3'>
                      <i className="bi bi-heart"></i>
                      <small className='ms-2'>2,124</small>
                    </p>
                    <p className='text-muted mx-3'>
                      <i className="bi bi-bar-chart"></i>
                      <small className='ms-2'>327k</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="tp-dots">
                <p className='cursor-pointer'>...</p>
              </div>
            </div> */}
          {/* <div className="tweet-message">
              <div className='tp'>
                <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                <div className="tp-data">
                  <small className='mx-2 tweet-post-title'>Hosein Sedaqat</small>
                  <small className='text-muted tweet-post-title'>@HoseinSedaqat</small>
                  <small className='ms-1 text-muted tweet-post-title'>.14h</small>
                  <div className='px-2 py-2'>
                    <small>this is awesome</small>
                  </div>
                  <div>
                    <Image src={ModernFamily} alt='User-Tweet-Img' className='my-2'/>
                  </div>
                  <div className='d-flex tweet-post-sm'>
                    <p className='text-muted me-3'>
                      <i className="bi bi-chat"></i>
                      <small className='ms-2'>234</small>
                    </p>
                    <p className='text-muted mx-3'>
                      <i className="bi bi-arrow-90deg-left"></i>
                      <small className='ms-2'>145</small>
                    </p>
                    <p className='text-muted mx-3'>
                      <i className="bi bi-heart"></i>
                      <small className='ms-2'>2,124</small>
                    </p>
                    <p className='text-muted mx-3'>
                      <i className="bi bi-bar-chart"></i>
                      <small className='ms-2'>327k</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="tp-dots">
                <p className='cursor-pointer'>...</p>
              </div>
            </div> */}
        </main>
      </section>
    </>
  );
}

export default Tweets;
