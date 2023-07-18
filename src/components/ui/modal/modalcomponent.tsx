import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg'

import Image from 'next/image'

import PropTypes, { InferProps } from "prop-types";

const ComponentPropTypes = {
    id: PropTypes.string.isRequired,
};

type ComponentTypes = InferProps<typeof ComponentPropTypes>;

function ModalComponent({id}: ComponentTypes) {
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
                        <div className="add-tweet">
                            <div>
                                {/* User profile image */}
                                <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                            </div>
                            <div className='w-100'>
                                {/* Tweet textarea */}
                                <textarea 
                                    name="tweet" 
                                    id="tweet-textarea" 
                                    cols={35} 
                                    rows={5} 
                                    placeholder='What is happening?!' 
                                    className='w-100' 
                                    maxLength={100}
                                ></textarea>
                                <div className='tweet-features'>
                                    <p>
                                    {/* Image upload */}
                                    <label htmlFor="Image">
                                        <i className="bi bi-image text-primary"></i>
                                    </label>
                                    <input type="file" name='Image' id='Image' className='d-none'/>
                                    {/* Other tweet features */}
                                    <i className="bi bi-filetype-gif text-primary"></i>
                                    <i className="bi bi-ui-radios text-primary"></i>
                                    <i className="bi bi-calendar4-event text-primary"></i>
                                    <i className="bi bi-geo-alt-fill text-primary"></i>
                                    </p>
                                    {/* Tweet button */}
                                    <button className='bg-primary'>Tweet</button>
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