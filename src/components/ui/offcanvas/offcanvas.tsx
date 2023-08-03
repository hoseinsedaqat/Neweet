'use client'
import Image from 'next/image'
import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg'
import Logo from '@/assets/TwitterLogo.jpeg'
import { useEffect } from 'react'
import Link from 'next/link'
function OffCanvas() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap")
      },[])
    return ( 
        <>
            <header id="header-small">
                {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    Button with data-bs-target
                </button> */}
                <Image src={HoseinSedaqat} alt='User-profile-img' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"/>
                <div>
                <Link href={'/'}>
                    <Image className='TwitterXLogo' alt={'TwitterXLogo'} src={Logo} />
                </Link>
                </div>
                

                <div className="offcanvas offcanvas-start bg-x" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <Link href={'/'}>
                        <Image className='TwitterXLogo' alt={'TwitterXLogo'} src={Logo} />
                    </Link>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul>
                        <li>
                            <Link href={'/'}>
                            <div>
                                <i className="bi bi-house-door-fill fs-5"></i>
                            </div> 
                            <div className='ms-3 fs-5'>
                                Home
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/explore'}>
                            <div>
                                <i className="bi bi-search fs-5"></i>
                            </div> 
                            <div className='ms-3 fs-5'>
                                Explore
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/notifications'}>
                            <div>
                                <i className="bi bi-bell fs-5"></i>
                            </div> 
                            <div className='ms-3 fs-5'>
                                Notifications
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/messages'}>
                            <div>
                                <i className="bi bi-envelope fs-5"></i>
                            </div> 
                            <div className='ms-3 fs-5'>
                                Messages
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                            <div>
                                <i className="bi bi-filter-square fs-5"></i>
                            </div> 
                            <div className='ms-3 fs-5'>
                                Lists
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/bookmarks'}>
                            <div>
                                <i className="bi bi-bookmark fs-5"></i>
                            </div> 
                            <div className='ms-3 fs-5'>
                                Bookmarks
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                            <div>
                                <i className="bi bi-people fs-5"></i>
                            </div> 
                            <div className='ms-3 fs-5'>
                                Communities
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                            <div>
                                <i className="bi bi-patch-check fs-5"></i>
                            </div> 
                            <div className='ms-3 fs-5'>
                                Verified
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/profile'}>
                            <div>
                                <i className="bi bi-person fs-5"></i>
                            </div> 
                            <div className='ms-3 fs-5'>
                                Profile
                            </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                            <div>
                                <i className="bi bi-three-dots fs-5"></i>
                            </div> 
                            <div className='ms-3 fs-5'>
                                More
                            </div>
                            </Link>
                        </li>
                        <li>
                    <button type='button' className="tweet-btn bg-primary" data-bs-toggle="modal" data-bs-target="#tweetModal">
                        Tweet
                    </button>
                        </li>
                        <li>
                    <p>
                        <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                    </p>
                    <p className='ms-3'>
                        <span className='d-block'>Hosein Sedaqat</span>
                        <span className='d-block'>@HoseinSedaqat</span>
                    </p>
                        </li>
                    </ul>
                    {/* <div>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div className="dropdown mt-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div> */}
                </div>
                </div>
            </header>
        </>
     );
}

export default OffCanvas;