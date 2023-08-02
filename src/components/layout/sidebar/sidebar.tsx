'use client'
import Image from 'next/image';
import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg';
import Logo from '@/assets/TwitterLogo.jpeg';
import ModalComponent from '../../ui/modal/modalcomponent';
import Link from 'next/link'
function Sidebar() {
    return ( 
       <>
        {/* Sidebar Column */}
        <section className="col-md-3" id="sidebar-column">
          <div>
            <ul>
              <li>
                <div>
                  <Link href={'/'}>
                    <Image className='TwitterXLogo' alt={'TwitterXLogo'} src={Logo} />
                  </Link>
                  {/* <i className="bi bi-twitter fs-5"></i> */}
                </div>
              </li>
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
          </div>
        </section>
        {/* Sidebar Column */}
        <ModalComponent id={'tweetModal'}/>
       </>
     );
}

export default Sidebar;