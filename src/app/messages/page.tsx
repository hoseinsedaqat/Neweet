'use client'
import Sidebar from '@/components/layout/sidebar/sidebar'
import HoseinSedaqat from '@/assets/HoseinSedaqat.jpg'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Image from 'next/image'
function Messages() {
    const test = useSelector<any, boolean>(state => state.tweet.tweet);
    console.log(test);
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap")
      },[])
    return ( 
        <>
        <div className="container">
          <div className="row">
            <Sidebar />
            <section className="col-md-4" id='messages-preview'>
              <div className="messages-header">
                <p className='fs-5'>
                  Messages
                </p>
                <div>
                  <p>
                    <i className="bi bi-gear cursor-pointer"></i>
                  </p>
                  <p>
                    <i className="bi bi-envelope-plus cursor-pointer"></i>
                  </p>
                </div>
              </div>
              <div className="messages-search">
                <div>
                  <i className="bi bi-search text-muted"></i>
                </div>
                <input type="text" placeholder='Search Direct Messages' className='text-muted'/>
              </div>
              <div className="messages-user">
                <div>
                  <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                </div>
                <div>
                  <span>
                    <small>Hosein</small>
                    <small className='text-muted mx-1'>@HoseinSedaqat</small>
                    <small className='text-muted'>Jul 8</small>
                  </span>
                  <span>
                    <small className='text-muted'>This is my Awesome Message...</small>
                  </span>
                </div>
              </div>
              <div className="messages-user">
                <div>
                  <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                </div>
                <div>
                  <span>
                    <small>Hosein</small>
                    <small className='text-muted mx-1'>@HoseinSedaqat</small>
                    <small className='text-muted'>Jul 8</small>
                  </span>
                  <span>
                    <small className='text-muted'>This is my Awesome Message...</small>
                  </span>
                </div>
              </div>
              <div className="messages-user">
                <div>
                  <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                </div>
                <div>
                  <span>
                    <small>Hosein</small>
                    <small className='text-muted mx-1'>@HoseinSedaqat</small>
                    <small className='text-muted'>Jul 8</small>
                  </span>
                  <span>
                    <small className='text-muted'>This is my Awesome Message...</small>
                  </span>
                </div>
              </div>
              <div className="messages-user">
                <div>
                  <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                </div>
                <div>
                  <span>
                    <small>Hosein</small>
                    <small className='text-muted mx-1'>@HoseinSedaqat</small>
                    <small className='text-muted'>Jul 8</small>
                  </span>
                  <span>
                    <small className='text-muted'>This is my Awesome Message...</small>
                  </span>
                </div>
              </div>
              <div className="messages-user">
                <div>
                  <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                </div>
                <div>
                  <span>
                    <small>Hosein</small>
                    <small className='text-muted mx-1'>@HoseinSedaqat</small>
                    <small className='text-muted'>Jul 8</small>
                  </span>
                  <span>
                    <small className='text-muted'>This is my Awesome Message...</small>
                  </span>
                </div>
              </div>
              <div className="messages-user">
                <div>
                  <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                </div>
                <div>
                  <span>
                    <small>Hosein</small>
                    <small className='text-muted mx-1'>@HoseinSedaqat</small>
                    <small className='text-muted'>Jul 8</small>
                  </span>
                  <span>
                    <small className='text-muted'>This is my Awesome Message...</small>
                  </span>
                </div>
              </div>
              <div className="messages-user">
                <div>
                  <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                </div>
                <div>
                  <span>
                    <small>Hosein</small>
                    <small className='text-muted mx-1'>@HoseinSedaqat</small>
                    <small className='text-muted'>Jul 8</small>
                  </span>
                  <span>
                    <small className='text-muted'>This is my Awesome Message...</small>
                  </span>
                </div>
              </div>
              <div className="messages-user">
                <div>
                  <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                </div>
                <div>
                  <span>
                    <small>Hosein</small>
                    <small className='text-muted mx-1'>@HoseinSedaqat</small>
                    <small className='text-muted'>Jul 8</small>
                  </span>
                  <span>
                    <small className='text-muted'>This is my Awesome Message...</small>
                  </span>
                </div>
              </div>
            </section>
            <section className="col-md-5" id='messages-direct'>
              <div className="messages-direct-header">
                <div>
                  <Image src={HoseinSedaqat} alt='User-Profile-Img'/>
                  <small>HoseinSedaqat</small>
                </div>
                <div>
                  <i className="bi bi-info-circle cursor-pointer"></i>
                </div>
              </div>
              <div className="messages-direct-texts">
                  <p className="bg-primary text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi consequuntur enim commodi possimus eveniet sit, saepe nostrum at fugiat!
                  </p>
                  <p className="bg-secondary text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi consequuntur enim commodi possimus eveniet sit, saepe nostrum at fugiat!
                  </p> 
                  <p className="bg-primary text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi consequuntur enim commodi possimus eveniet sit, saepe nostrum at fugiat!
                  </p>
                  <p className="bg-secondary text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi consequuntur enim commodi possimus eveniet sit, saepe nostrum at fugiat!
                  </p> 
                  <p className="bg-primary text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi consequuntur enim commodi possimus eveniet sit, saepe nostrum at fugiat!
                  </p>
                  <p className="bg-secondary text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sequi consequuntur enim commodi possimus eveniet sit, saepe nostrum at fugiat!
                  </p> 
              </div>
              <div className="messages-direct-add">
                <input type="text" placeholder='Start a new messgae'/>
                <div>
                  <i className="bi bi-send-fill cursor-pointer"></i>
                </div>
              </div>
            </section>
           </div>
        </div> 
        </>
     );
}

export default Messages;