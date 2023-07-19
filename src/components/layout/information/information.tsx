import Image from 'next/image';
import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg';
function Information() {
    return ( 
        <>
        {/* Information Side */}
        <section className="col-md-4" id='information-column'>
          <main>
            {/* search bar */}
            <div className='search-bar'>
              <div>
                <i className="bi bi-search text-muted"></i>
              </div>
              <input type="text" placeholder='Search Neweet' className='text-muted'/>
            </div>
            {/* get verified */}
            <div className="get-verified">
              <h5>Get Verified</h5>
              <p>Subscribe to unlock new features</p>
              <button className='bg-primary'>Get Verified</button>
            </div>
            {/* trends */}
            <div className="trends">
              <h5>Trends for you</h5>
              <div className='d-flex align-items-center justify-content-between'>
                <p>
                  <small className="d-block text-muted">Trending in England</small>
                  <span className="d-block">Nextjs</span>
                  <small className="d-block text-muted">457.9k tweets</small>
                </p>
                <p>...</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>
                  <small className="d-block text-muted">Trending in England</small>
                  <span className="d-block">Nuxtjs</span>
                  <small className="d-block text-muted">331.9k tweets</small>
                </p>
                <p>...</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>
                  <small className="d-block text-muted">Trending in England</small>
                  <span className="d-block">Diffrent</span>
                  <small className="d-block text-muted">331.9k tweets</small>
                </p>
                <p>...</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>
                  <small className="d-block text-muted">Trending in England</small>
                  <span className="d-block">Music</span>
                  <small className="d-block text-muted">331.9k tweets</small>
                </p>
                <p>...</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p>
                  <small className="d-block text-muted">Trending in England</small>
                  <span className="d-block">Books</span>
                  <small className="d-block text-muted">331.9k tweets</small>
                </p>
                <p>...</p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p className='text-primary'>show more</p>
              </div>
            </div>
            {/* Who to follow */}
            <div className="who-follow">
              <h5 className='mb-3'>Who to follow</h5>
              <div className='d-flex align-items-center justify-content-between my-3'>
                <div className='d-flex align-items-center'>
                  <div>
                    <Image src={HoseinSedaqat} alt='Recommended-Profile-Img'/>
                  </div>
                  <div className='ms-2'>
                    <small className="d-block">Hosein Sedaqat</small>
                    <small className="d-block text-muted">@HoseinSedaqat</small>
                  </div>
                </div>
                <p>
                  <button className='bg-white text-dark'>
                    <small>
                      Follow
                    </small>
                  </button>
                </p>
              </div>
              <div className='d-flex align-items-center justify-content-between my-3'>
                <div className='d-flex align-items-center'>
                  <div>
                    <Image src={HoseinSedaqat} alt='Recommended-Profile-Img'/>
                  </div>
                  <div className='ms-2'>
                    <small className="d-block">Hosein Sedaqat</small>
                    <small className="d-block text-muted">@HoseinSedaqat</small>
                  </div>
                </div>
                <p>
                  <button className='bg-white text-dark'>
                    <small>
                      Follow
                    </small>
                  </button>
                </p>
              </div>
              <div className='d-flex align-items-center justify-content-between my-3'>
                <div className='d-flex align-items-center'>
                  <div>
                    <Image src={HoseinSedaqat} alt='Recommended-Profile-Img'/>
                  </div>
                  <div className='ms-2'>
                    <small className="d-block">Hosein Sedaqat</small>
                    <small className="d-block text-muted">@HoseinSedaqat</small>
                  </div>
                </div>
                <p>
                  <button className='bg-white text-dark'>
                    <small>
                      Follow
                    </small>
                  </button>
                </p>
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <p className='text-primary'>show more</p>
              </div>
            </div>
            {/* Footer */}
            <div className='footer my-3'>
              <div className="d-flex">
                <small className='text-muted mx-1'>Terms of Service</small>
                <small className='text-muted mx-1'>Privacy Policy</small>
                <small className='text-muted mx-2'>Cookie Policy</small>
              </div>
              <div className="d-flex">
                <small className='text-muted mx-1'>Accessibility</small>
                <small className='text-muted mx-1'>Ads info</small>
                <small className='text-muted mx-1'>More</small>
              </div>
              <small className='text-muted mx-1 d-block'>&copy; Neweet Design by Hosein Sedaqat 2023</small>
            </div>
          </main>
        </section>
        </>
     );
}

export default Information;