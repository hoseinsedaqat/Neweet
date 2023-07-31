import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg'

import Image from 'next/image'

import PropTypes, { InferProps } from "prop-types";

const ComponentPropTypes = {
    id: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

function ModalEditProfile({id}: ComponentTypes) {
    return ( 
        <>
        {/* Button trigger modal */}
        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#tweetModal">
            Launch demo modal
        </button> */}
        {/* Modal */}
        <div className="modal fade" id={id} tabIndex={-1} aria-labelledby={id + 'example'} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <i className="bi bi-x fs-4 p-2 cursor-pointer" data-bs-dismiss="modal" aria-label="Close"></i>
                    <div className="modal-body">
                        <div className="modal-edit-profile">
                            <div className='modal-edit-profile-img'>
                                {/* User profile image */}
                                <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                                <button className='btn btn-outline-light my-3'>Upload Image</button>
                            </div>
                            <div className='w-100'>
                                <div className="form-group">
                                    <label htmlFor="user-name" className='my-2'>Full Name:</label>
                                    <input type="text" name="user-name" id="user-name" className='form-control my-1' placeholder={'HoseinSedaqat'}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="user-app-name" className='my-2'>User Name:</label>
                                    <input type="text" name="user-app-name" id="user-app-name" className='form-control my-1' placeholder={'@HoseinSedaqat'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default ModalEditProfile;