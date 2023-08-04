import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg'
import ModernFamily from '@/assets/ModernFamily.jpg'
import SidebarMd from '@/components/layout/sidebar/sidebarmd'
import Image from 'next/image'
function Explores() {
    return ( 
        <>
            <section className="col-md-5" id="explore">
                <SidebarMd id=''/>
                <main>
                    <div className="explore-header">
                        <div>
                            <i className="bi bi-search text-muted"></i>
                        </div>
                        <input type="text" placeholder='Search Neweet' className='text-muted'/>
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
                    {/* Trending Post */}
                    <div className="tweet-message">
                        <div className='tp'>
                            <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                            <div className="tp-data">
                            <small className='mx-2 tweet-post-title'>Hosein Sedaqat</small>
                            <small className='text-muted tweet-post-title'>@HoseinSedaqat</small>
                            <small className='ms-1 text-muted tweet-post-title'>.14h</small>
                            <div className='px-2 py-2'>
                                <small>this is awesome</small>
                            </div>
                            <div>
                                <Image src={ModernFamily} alt='User-Tweet-Img' className='my-2'/>
                            </div>
                            <div className='d-flex tweet-post-sm'>
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
                            <small className='mx-2 tweet-post-title'>Hosein Sedaqat</small>
                            <small className='text-muted tweet-post-title'>@HoseinSedaqat</small>
                            <small className='ms-1 text-muted tweet-post-title'>.14h</small>
                            <div className='px-2 py-2'>
                                <small>this is awesome</small>
                            </div>
                            <div>
                                <Image src={ModernFamily} alt='User-Tweet-Img' className='my-2'/>
                            </div>
                            <div className='d-flex tweet-post-sm'>
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
                            <small className='mx-2 tweet-post-title'>Hosein Sedaqat</small>
                            <small className='text-muted tweet-post-title'>@HoseinSedaqat</small>
                            <small className='ms-1 text-muted tweet-post-title'>.14h</small>
                            <div className='px-2 py-2'>
                                <small>this is awesome</small>
                            </div>
                            <div>
                                <Image src={ModernFamily} alt='User-Tweet-Img' className='my-2'/>
                            </div>
                            <div className='d-flex tweet-post-sm'>
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

export default Explores;