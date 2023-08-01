import Image from 'next/image'
import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg'
import Logo from '@/assets/TwitterLogo.jpeg'
function NotifyLanding() {
    return ( 
        <>
            <section className="col-md-5" id="notifications">
            <main>
          <div>
            <ul>
              <li>
                <div>
                  <Image className='TwitterXLogo' alt={'TwitterXLogo'} src={Logo} />
                  {/* <i className="bi bi-twitter fs-5"></i> */}
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-house-door-fill fs-5"></i>
                </div>
              </li>
              <li>
                <div>
                  <i className="bi bi-search fs-5"></i>
                </div> 
              </li>
              <li>
                <div>
                  <i className="bi bi-bell fs-5"></i>
                </div> 
              </li>
              <li>
                <div>
                  <i className="bi bi-envelope fs-5"></i>
                </div> 
              </li>
              <li>
                <div>
                  <i className="bi bi-filter-square fs-5"></i>
                </div> 
              </li>
              <li>
                <div>
                  <i className="bi bi-bookmark fs-5"></i>
                </div> 
              </li>
              <li>
                <div>
                  <i className="bi bi-people fs-5"></i>
                </div> 
              </li>
              <li>
                <div>
                  <i className="bi bi-patch-check fs-5"></i>
                </div> 
              </li>
              <li>
                <div>
                  <i className="bi bi-person fs-5"></i>
                </div> 
              </li>
              <li>
                <div>
                  <i className="bi bi-three-dots fs-5"></i>
                </div> 
              </li>
              <li>
                <button type='button' className="tweet-btn bg-primary" data-bs-toggle="modal" data-bs-target="#tweetModal">
                  <i className="bi bi-pencil-square"></i>
                </button>
              </li>
              <li>
                <p>
                    <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                </p>
              </li>
            </ul>
          </div>
          </main>
                <main>
                    <div className="notifications-header">
                        <h5>Notifications</h5>
                        <div className="cursor-pointer">
                            <i className="bi bi-gear"></i>
                        </div>
                    </div>
                    <div className="notifications-topics">
                        <p>All</p>
                        <p>Verified</p>
                        <p>Mentions</p>
                    </div>
                    <div className="notifications-content">
                        <div>
                            <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                            <p className='cursor-pointer'>...</p>
                        </div>
                        <div>
                            <small>Hosein Sedaqat</small>
                        </div>
                        <div>
                            <small className='text-muted'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum in molestias amet ab quis unde tempora dicta at. Iure ea, necessitatibus quo nostrum excepturi reiciendis fugiat quisquam! Eius, omnis.
                            </small>
                        </div>
                    </div>
                    <div className="notifications-content">
                        <div>
                            <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                            <p className='cursor-pointer'>...</p>
                        </div>
                        <div>
                            <small>Hosein Sedaqat</small>
                        </div>
                        <div>
                            <small className='text-muted'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum in molestias amet ab quis unde tempora dicta at. Iure ea, necessitatibus quo nostrum excepturi reiciendis fugiat quisquam! Eius, omnis.
                            </small>
                        </div>
                    </div>
                    <div className="notifications-content">
                        <div>
                            <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                            <p className='cursor-pointer'>...</p>
                        </div>
                        <div>
                            <small>Hosein Sedaqat</small>
                        </div>
                        <div>
                            <small className='text-muted'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum in molestias amet ab quis unde tempora dicta at. Iure ea, necessitatibus quo nostrum excepturi reiciendis fugiat quisquam! Eius, omnis.
                            </small>
                        </div>
                    </div>
                    <div className="notifications-content">
                        <div>
                            <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                            <p className='cursor-pointer'>...</p>
                        </div>
                        <div>
                            <small>Hosein Sedaqat</small>
                        </div>
                        <div>
                            <small className='text-muted'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum in molestias amet ab quis unde tempora dicta at. Iure ea, necessitatibus quo nostrum excepturi reiciendis fugiat quisquam! Eius, omnis.
                            </small>
                        </div>
                    </div>
                    <div className="notifications-content">
                        <div>
                            <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                            <p className='cursor-pointer'>...</p>
                        </div>
                        <div>
                            <small>Hosein Sedaqat</small>
                        </div>
                        <div>
                            <small className='text-muted'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum in molestias amet ab quis unde tempora dicta at. Iure ea, necessitatibus quo nostrum excepturi reiciendis fugiat quisquam! Eius, omnis.
                            </small>
                        </div>
                    </div>
                    <div className="notifications-content">
                        <div>
                            <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                            <p className='cursor-pointer'>...</p>
                        </div>
                        <div>
                            <small>Hosein Sedaqat</small>
                        </div>
                        <div>
                            <small className='text-muted'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum in molestias amet ab quis unde tempora dicta at. Iure ea, necessitatibus quo nostrum excepturi reiciendis fugiat quisquam! Eius, omnis.
                            </small>
                        </div>
                    </div>
                </main>
            </section>
        </>
     );
}

export default NotifyLanding;