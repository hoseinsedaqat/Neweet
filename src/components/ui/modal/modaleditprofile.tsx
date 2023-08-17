"use client";

import {
  updateProfileImage,
  prepareImage,
  updateUserNameWithId,
} from "@/features/profileSlice";

import { toast_features } from "@/constants/toastfeatures";

import { useSelector, useDispatch } from "react-redux";

import PropTypes, { InferProps } from "prop-types";

import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import Image from "next/image";

const ComponentPropTypes = {
  id: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

function ModalEditProfile({ id }: ComponentTypes) {
  const dispatch = useDispatch();

  const username = useSelector<any, any>((store) => store.profile.username);

  const userid = useSelector<any, any>((store) => store.profile.userid);

  const [forName, setForName] = useState(username);

  const [forId, setForId] = useState(userid);

  const profile_image = useSelector<any, any>(
    (store) => store.profile.profile_image
  );

  const new_profile_image = useSelector<any, any>(
    (store) => store.profile.new_profile_image
  );

  const switch_image = useSelector<any, any>(
    (store) => store.profile.switch_image
  );

  function selectedImg(e: any) {
    try {
      var reader = new FileReader();
      reader.onload = () => {
        // setFiles(reader.result as string);
        dispatch(updateProfileImage(reader.result));
      };

      reader.readAsDataURL(e.target.files[0]);
    } catch (e) {
      // console.log(e);
      toast.error("Image Size is Large 💀", toast_features as any);
    }
  }

  function updateName_Id() {
    dispatch(updateUserNameWithId({ username: forName, userid: forId }));
    setForName("");
    setForId("");
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
              <div className='modal-edit-profile'>
                <div className='modal-edit-profile-img'>
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

                  <label
                    htmlFor='user-profile-image'
                    className='my-3'>
                    <i className='bi bi-upload text-white cursor-pointer fs-4'></i>
                    <input
                      type='file'
                      id='user-profile-image'
                      className='d-none'
                      onChange={selectedImg}
                    />
                  </label>
                </div>
                <div className='w-100'>
                  <div className='form-group'>
                    <label
                      htmlFor='user-name'
                      className='my-2'>
                      Full Name:
                    </label>
                    <input
                      type='text'
                      name='user-name'
                      id='user-name'
                      onChange={(e) => setForName(e.target.value)}
                      className='form-control my-1'
                      placeholder={username}
                    />
                  </div>
                  <div className='form-group'>
                    <label
                      htmlFor='user-app-name'
                      className='my-2'>
                      User Name:
                    </label>
                    <input
                      type='text'
                      name='user-app-name'
                      id='user-app-name'
                      onChange={(e) => setForId(e.target.value)}
                      className='form-control my-1'
                      placeholder={userid}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                data-bs-dismiss='modal'
                aria-label='Close'
                className='btn btn-primary'
                onClick={() => updateName_Id()}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalEditProfile;
