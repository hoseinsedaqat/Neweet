'use client'
import Sidebar from '@/components/layout/sidebar/sidebar'
import Information from '@/components/layout/information/information'
import Tweets from '@/components/layout/tweets/tweets'
import { useEffect } from 'react'
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
    </div>
    </>
  )
}
