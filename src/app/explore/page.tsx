'use client'
import Sidebar from '@/components/layout/sidebar/sidebar'
import Information from '@/components/explore/information/information'
import Explores from '@/components/explore/explores/explores'
import { useEffect } from 'react'
function Explore() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap")
      },[])
    return ( 
        <>
        <div className="container">
          <div className="row">
            <Sidebar />
            <Explores />
            <Information />
           </div>
        </div>
        </>
     );
}

export default Explore;