import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg'
import ModernFamily from '@/assets/ModernFamily.jpg'
import Image from 'next/image'
import SidebarMd from '../sidebar/sidebarmd'
function Tweets() {
    return ( 
        <>
        <section className="col-md-5" id='tweets'>
          <SidebarMd />
          <main>
            <div className="header-filter w-100">
              <p>For you</p>
              <p>Following</p>
            </div>
            <div className="add-tweet">
              <div>
                <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
              </div>
              <div className='w-100'>
                <textarea 
                name="tweet" 
                id="tweet-textarea" 
                cols={35} 
                rows={5} 
                placeholder='What is happening?!' 
                className='w-100' 
                maxLength={100}>
                </textarea>
                <div className='tweet-features'>
                  <p>
                   <label htmlFor="Image">
                    <i className="bi bi-image text-primary"></i>
                   </label>
                   <input type="file" name='Image' id='Image' className='d-none'/>
                   <i className="bi bi-filetype-gif text-primary"></i>
                   <i className="bi bi-ui-radios text-primary"></i>
                   <i className="bi bi-calendar4-event text-primary"></i>
                   <i className="bi bi-geo-alt-fill text-primary"></i>
                  </p>
                  <button className='bg-primary'>Tweet</button>
                </div>
              </div>
            </div>
            <div className="show-tweet">
              <p className='text-primary text-center my-2'>Show 105 Tweets</p>
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
        </>
     );
}

export default Tweets;