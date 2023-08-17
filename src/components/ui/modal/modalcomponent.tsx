"use client";

import { useValidation } from "react-simple-form-validator";

import { toast_features } from "@/constants/toastfeatures";

import { prepareImage } from "@/features/profileSlice";

import { useSelector, useDispatch } from "react-redux";

import PropTypes, { InferProps } from "prop-types";

import { addTweet } from "@/features/tweetSlice";

import { useState, useEffect } from "react";

import { toast } from "react-toastify";

import Image from "next/image";

const ComponentPropTypes = {
  id: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

function ModalComponent({ id }: ComponentTypes) {
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
                    {isFormValid ? (
                      <button
                        className='bg-primary'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                        onClick={() => addPost(tweetText)}>
                        Post
                      </button>
                    ) : (
                      <button
                        className='bg-primary'
                        onClick={() => addPost(tweetText)}>
                        Post
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalComponent;
