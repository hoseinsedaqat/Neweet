'use client'
import Image from 'next/image'
import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg'
import Logo from '@/assets/TwitterLogo.jpeg'
import Link from 'next/link'
import PropTypes, { InferProps } from "prop-types";
const ComponentPropTypes = {
    id: PropTypes.string.isRequired,
};
type ComponentTypes = InferProps<typeof ComponentPropTypes>;

function SidebarMd({id}: ComponentTypes) {
    return ( 
        <>
            <main className={id}>
                <div>
                    <ul>
                        <li>
                            <Link href={'/'}>
                                <div>
                                    <Image className='TwitterXLogo' alt={'TwitterXLogo'} src={Logo} />
                                    {/* <i className="bi bi-twitter fs-5"></i> */}
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <div>
                                    <i className="bi bi-house-door-fill fs-5"></i>
                                </div>
                            </Link>
                        </li>
                        <li>
                              <Link href={'/explore'}>
                                <div>
                                    <i className="bi bi-search fs-5"></i>
                                </div> 
                              </Link>
                        </li>
                        <li>
                              <Link href={'/notifications'}>
                                <div>
                                    <i className="bi bi-bell fs-5"></i>
                                </div> 
                              </Link>
                        </li>
                        <li>
                              <Link href={'/messages'}>
                                <div>
                                    <i className="bi bi-envelope fs-5"></i>
                                </div>
                              </Link> 
                        </li>
                        <li>
                             <Link href={'/'}>
                                <div>
                                    <i className="bi bi-filter-square fs-5"></i>
                                </div> 
                             </Link>
                        </li>
                        <li>
                             <Link href={'/bookmarks'}>
                                <div>
                                    <i className="bi bi-bookmark fs-5"></i>
                                </div> 
                             </Link>
                        </li>
                        <li>
                              <Link href={'/'}>
                                <div>
                                    <i className="bi bi-people fs-5"></i>
                                </div> 
                              </Link>
                        </li>
                        <li>
                              <Link href={'/'}>
                                <div>
                                    <i className="bi bi-patch-check fs-5"></i>
                                </div> 
                              </Link>
                        </li>
                        <li>
                              <Link href={'/profile'}>
                                <div>
                                    <i className="bi bi-person fs-5"></i>
                                </div> 
                              </Link>
                        </li>
                        <li>
                              <Link href={'/'}>
                                <div>
                                    <i className="bi bi-three-dots fs-5"></i>
                                </div> 
                              </Link>
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
        </>
     );
}

export default SidebarMd;