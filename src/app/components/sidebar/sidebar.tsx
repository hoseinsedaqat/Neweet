'use client'
import Image from 'next/image';
import HoseinSedaqat from '../../../assets/HoseinSedaqat.jpg';
function Sidebar() {
    return ( 
       <>
        {/* Sidebar Column */}
        <section className="col-md-3 mx-auto" id="sidebar-column">
          <div>
            <ul>
              <li>
                <div>
                  <i className="bi bi-twitter fs-4"></i>
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-house-door-fill fs-4"></i>
                </div> 
                <div className='ms-3 fs-5'>
                  Home
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-search fs-4"></i>
                </div> 
                <div className='ms-3 fs-5'>
                  Explore
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-bell fs-4"></i>
                </div> 
                <div className='ms-3 fs-5'>
                  Notifications
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-envelope fs-4"></i>
                </div> 
                <div className='ms-3 fs-5'>
                  Messages
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-filter-square fs-4"></i>
                </div> 
                <div className='ms-3 fs-5'>
                  Lists
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-bookmark fs-4"></i>
                </div> 
                <div className='ms-3 fs-5'>
                  Bookmarks
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-patch-check fs-4"></i>
                </div> 
                <div className='ms-3 fs-5'>
                  Verified
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-person fs-4"></i>
                </div> 
                <div className='ms-3 fs-5'>
                  Profile
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-three-dots fs-4"></i>
                </div> 
                <div className='ms-3 fs-5'>
                  More
                </div>
              </li>
              <li>
                <button className="tweet-btn bg-primary">
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
       </>
     );
}

export default Sidebar;