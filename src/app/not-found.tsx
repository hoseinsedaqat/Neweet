'use client'
import Sidebar from "@/components/layout/sidebar/sidebar";
import SidebarMd from "@/components/layout/sidebar/sidebarmd";
import Link from "next/link";
import { useEffect } from 'react'
function NotFound() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap")
      },[])
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <section className="col-md-9" id="not-found">
                        <SidebarMd id = ''/>
                        <main>
                            <p>
                                {`Hmm...this page doesn't exist. Try searchingfor something else.`} 
                            </p>
                            <Link href={'/'} className="bg-primary">
                                Back to Home
                            </Link>
                        </main>
                    </section>
                </div>
            </div>
        </>
     );
}

export default NotFound;