'use client'
import Sidebar from '@/components/layout/sidebar/sidebar'
import Information from '@/components/layout/information/information'
import { useEffect } from 'react'
function Profile() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap")
      },[])
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <section className="col-md-5" id='profile'>
                        <p>This Profile Page</p>
                    </section>
                    <Information />
                </div>
            </div>
        </>
     );
}

export default Profile;