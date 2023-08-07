import SidebarMd from "@/components/layout/sidebar/sidebarmd";

import { notification_data } from "@/data/notification";

import Image from "next/image";

function NotifyLanding() {
  return (
    <>
      <section
        className='col-md-5'
        id='notifications'>
        <SidebarMd id='' />
        <main>
          <div className='notifications-header'>
            <h5>Notifications</h5>
            <div className='cursor-pointer'>
              <i className='bi bi-gear'></i>
            </div>
          </div>
          <div className='notifications-topics'>
            <p>All</p>
            <p className='text-muted'>Verified</p>
            <p className='text-muted'>Mentions</p>
          </div>
          {notification_data.map((user, idx) => (
            <div
              className='notifications-content'
              key={idx}>
              <div>
                <Image
                  src={user.img}
                  alt='User-Profile-Img'
                />
                <p className='cursor-pointer'>...</p>
              </div>
              <div>
                <small>{user.name}</small>
              </div>
              <div>
                <small className='text-muted'>{user.text}</small>
              </div>
            </div>
          ))}
        </main>
      </section>
    </>
  );
}

export default NotifyLanding;
