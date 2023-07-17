'use client'
import Sidebar from '@/components/sidebar/sidebar'
import Information from '@/components/information/information'
import Tweets from '@/components/tweets/tweets'
import { useEffect } from 'react'
// import ModalComponent from '@/components/ui/modal/modalcomponent'
export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap")
  },[])
  return (
    <>
    <div className="container">
      <div className="row">
        <Sidebar />
        <Tweets />
        <Information />
      </div>
      {/* <ModalComponent/> */}
    </div>
    </>
  )
}
