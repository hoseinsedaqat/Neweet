"use client";

import NotifyLanding from "@/components/notifications/landing/notifylanding";

import Information from "@/components/layout/information/information";

import Sidebar from "@/components/layout/sidebar/sidebar";

import { useEffect } from "react";

function Notifications() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Sidebar />
          <NotifyLanding />
          <Information />
        </div>
      </div>
    </>
  );
}

export default Notifications;
