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
                    <i className="bi bi-gear"></i>
                  </p>
                  <p>
                    <i className="bi bi-envelope-plus"></i>
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
            <section className="col-md-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ad totam nulla eius corporis adipisci, officiis tenetur, repudiandae nesciunt, sint itaque earum consectetur ullam maiores voluptas. Rerum fugit soluta aspernatur ducimus harum quia numquam reiciendis in qui? Reprehenderit autem facilis dolorem nisi. Ut, tenetur magnam! Soluta magni eius reprehenderit id tempore error illo ut porro? Corporis recusandae minima, id dicta veniam saepe sapiente! Consequuntur similique eveniet dicta dignissimos optio fugit consequatur, deserunt, ipsum eum amet reiciendis voluptatibus vitae aperiam sit nobis, veritatis illum ab omnis aspernatur id cupiditate debitis? Corporis, voluptatum. Temporibus cumque dolorem quibusdam cum ipsum ratione dolores ad!
            </section>
           </div>
        </div> 
        </>
     );
}

export default Messages;