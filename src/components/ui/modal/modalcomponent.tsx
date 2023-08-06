"use client";
import HoseinSedaqat from "@/assets/HoseinSedaqat.jpg";
import { addTweet } from "@/features/tweetSlice";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";
import { useState } from "react";
const ComponentPropTypes = {
  id: PropTypes.string.isRequired,
};
import { useDispatch } from "react-redux";
type ComponentTypes = InferProps<typeof ComponentPropTypes>;

function ModalComponent({ id }: ComponentTypes) {
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
      {/* Button trigger modal */}
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#tweetModal">
            Launch demo modal
        </button> */}
      {/* Modal */}
      <div
        className='modal fade'
        id={id}
        tabIndex={-1}
        aria-labelledby={id + "example"}
        aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <i
              className='bi bi-x fs-4 p-2 cursor-pointer'
              data-bs-dismiss='modal'
              aria-label='Close'></i>
            <div className='modal-body'>
              <div className='add-tweet'>
                <div>
                  {/* User profile image */}
                  <Image
                    src={HoseinSedaqat}
                    alt='User-Profile-Img'
                  />
                </div>
                <div className='w-100'>
                  {/* Tweet textarea */}
                  <textarea
                    name='tweet'
                    id='tweet-textarea'
                    cols={35}
                    rows={5}
                    placeholder='What is happening?!'
                    className='w-100'
                    value={tweetText}
                    onChange={(e) => setTweetText(e.target.value)}
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
                      {/* Image upload */}
                      <label htmlFor='tweet-modal-add-post'>
                        <i className='bi bi-image text-primary'></i>
                        <input
                          type='file'
                          id='tweet-modal-add-post'
                          className='d-none'
                          onChange={selectedImg}
                        />
                      </label>
                      {/* Other tweet features */}
                      <i className='bi bi-filetype-gif text-primary'></i>
                      <i className='bi bi-ui-radios text-primary'></i>
                      <i className='bi bi-calendar4-event text-primary'></i>
                      <i className='bi bi-geo-alt-fill text-primary'></i>
                    </p>
                    {/* Tweet button */}
                    <button
                      className='bg-primary'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                      onClick={() => addPost(tweetText)}>
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Tweet</button>
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalComponent;
