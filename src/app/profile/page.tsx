'use client'
import Image from 'next/image'
import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg'
import ModernFamily from '@/assets/ModernFamily.jpg'
import Sidebar from '@/components/layout/sidebar/sidebar'
import Information from '@/components/layout/information/information'
import ModalEditProfile from '@/components/ui/modal/modaleditprofile'
import { useEffect } from 'react'
function Profile() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap")
      },[])
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <section className="col-md-5" id='profile'>
                        <main>
                        <div className="profile-header">
                            <h5>Hosein Sedaqat</h5>
                        </div>
                        <div className="profile-edit">
                            <div>
                                <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                            </div>
                            <div>
                                <button data-bs-toggle="modal" data-bs-target="#editProfileModal">Edit profile</button>
                            </div>
                        </div>
                        <div className="profile-information">
                            <div>
                                <small className='fs-5'>Hosein Sedaqat</small>
                                <small className='text-muted'>@HoseinSedaqat</small>
                            </div>
                            <div>
                                <small className='text-muted'>
                                    <i className="bi bi-geo-alt me-1"></i>
                                    Bnd
                                </small>
                                <small className='text-muted'>
                                    <i className="bi bi-calendar4-week me-1"></i>
                                    Joined January 2022
                                </small>
                            </div>
                            <div>
                                <small>
                                    <span className='me-1'>47</span>
                                    <span className='text-muted'>Following</span>
                                </small>
                                <small>
                                    <span className='me-1'>4</span>
                                    <span className='text-muted'>Followers</span>
                                </small>
                            </div>
                            <div>
                                <small>Tweets</small>
                                <small className="text-muted">Replies</small>
                                <small className="text-muted">Highlights</small>
                                <small className="text-muted">Media</small>
                                <small className="text-muted">Likes</small>
                            </div>
                        </div>
                        <div className="tweet-message">
                            <div className='tp'>
                                <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                                <div className="tp-data">
                                <small className='mx-2'>Hosein Sedaqat</small>
                                <small className='text-muted'>@HoseinSedaqat</small>
                                <small className='ms-1 text-muted'>.14h</small>
                                <div className='px-2 py-2'>
                                    <small>this is awesome</small>
                                </div>
                                <div>
                                    <Image src={ModernFamily} alt='User-Tweet-Img' className='my-2'/>
                                </div>
                                <div className='d-flex'>
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
                                    <p className='text-muted mx-3'>
                                    <i className="bi bi-download"></i>
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="tp-dots">
                                <p>...</p>
                            </div>
                        </div>
                        <div className="tweet-message">
                            <div className='tp'>
                                <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                                <div className="tp-data">
                                <small className='mx-2'>Hosein Sedaqat</small>
                                <small className='text-muted'>@HoseinSedaqat</small>
                                <small className='ms-1 text-muted'>.14h</small>
                                <div className='px-2 py-2'>
                                    <small>this is awesome</small>
                                </div>
                                <div>
                                    <Image src={ModernFamily} alt='User-Tweet-Img' className='my-2'/>
                                </div>
                                <div className='d-flex'>
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
                                    <p className='text-muted mx-3'>
                                    <i className="bi bi-download"></i>
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="tp-dots">
                                <p>...</p>
                            </div>
                        </div>
                        </main>
                    </section>
                    <Information />
                </div>
            </div>
            <ModalEditProfile id='editProfileModal'/>
        </>
     );
}

export default Profile;