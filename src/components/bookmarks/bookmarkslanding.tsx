import Image from 'next/image';
import BookmarksImg from '@/assets/Bookmarks.png'
import Logo from '@/assets/TwitterLogo.jpeg'
import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg'
function BookmarksLanding() {
    return ( 
        <>
         <section className="col-md-5" id="bookmarks">
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
                <div className="bookmarks-header d-flex flex-column p-2">
                    <h5>Bookmarks</h5>
                    <small className='text-muted'>@HoseinSedaqat</small>
                </div>
                <div className="bookmarks-save">
                    <div>
                        <Image src={BookmarksImg} alt='Booksmarks-Img'/>
                    </div>
                    <div>
                        <h4>
                            Save Tweets for later
                        </h4>
                        <p className='text-muted'>
                            Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.
                        </p>
                    </div>
                </div>
            </main>
        </section>
        </>
     );
}

export default BookmarksLanding;