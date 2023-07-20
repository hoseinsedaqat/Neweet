'use client'
import Sidebar from '@/components/layout/sidebar/sidebar'
import Information from '@/components/layout/information/information'
import { useEffect } from 'react'
import NotifyLanding from '@/components/notifications/landing/notifylanding'
function Notifications() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap")
      },[])
    return ( 
        <>
        <div className="container">
          <div className="row">
            <Sidebar />
            <NotifyLanding />
            <Information />
           </div>
        </div>
        </>
     );
}

export default Notifications;