"use client";

import SidebarMd from "@/components/layout/sidebar/sidebarmd";

import Sidebar from "@/components/layout/sidebar/sidebar";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import Image from "next/image";

function Messages() {
  const messages = useSelector<any, any>((store) => store.message.messages);
  const [directEmpty, setDirectEmpty] = useState(true);
  const [fillDirect, setFillDirect] = useState({
    name: "",
    img: "",
    username: "",
    text: ``,
    directs: [],
  });
  function switchDirect(name: string) {
    setDirectEmpty(false);
    const findthename = messages.find((message: any) => message.name === name);
    setFillDirect(findthename);
  }
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <div className='container'>
        <div
          className='row'
          id='messages-manage-views'>
          <Sidebar />
          <SidebarMd id='messages-manage-sidebar' />
          <section
            className='col-md-4'
            id='messages-preview'>
            <div className='messages-header'>
              <p className='fs-5'>Messages</p>
              <div>
                <p>
                  <i className='bi bi-gear cursor-pointer'></i>
                </p>
                <p>
                  <i className='bi bi-envelope-plus cursor-pointer'></i>
                </p>
              </div>
            </div>
            <div className='messages-search'>
              <div>
                <i className='bi bi-search text-muted'></i>
              </div>
              <input
                type='text'
                placeholder='Search Direct Messages'
                className='text-muted'
              />
            </div>
            {messages.map((user: any, idx: number) => (
              <div
                className='messages-user'
                onClick={() => switchDirect(user.name)}
                key={idx}>
                <div>
                  <Image
                    src={user.img}
                    alt='User-Profile-Img'
                  />
                </div>
                <div>
                  <span>
                    <small>{user.name}</small>
                    <small className='text-muted mx-1'>@{user.username}</small>
                    <small className='text-muted'>
                      Jul {Math.abs(idx + 1 - 9)}
                    </small>
                  </span>
                  <span>
                    <small className='text-muted'>
                      {user.text.substring(0, 22) + "..."}
                    </small>
                  </span>
                </div>
              </div>
            ))}
          </section>
          {directEmpty ? (
            <section
              className='col-md-5'
              id='messages-direct-empty'>
              <h3>Select a message</h3>
              <p className='text-muted'>
                Choose from your existing conversations, start a new one, or
                just keep swimming.
              </p>
              <button className='bg-primary'>new message</button>
            </section>
          ) : (
            <section
              className='col-md-5'
              id='messages-direct'>
              <div className='messages-direct-header'>
                <div>
                  <Image
                    src={fillDirect.img}
                    alt='User-Profile-Img'
                  />
                  <small>{fillDirect.username}</small>
                </div>
                <div>
                  <i className='bi bi-info-circle cursor-pointer'></i>
                </div>
              </div>
              <div className='messages-direct-texts'>
                {fillDirect.directs.map((msg: any, idx) => (
                  <p
                    className={
                      msg.odd
                        ? "bg-primary text-white"
                        : "bg-secondary text-white"
                    }
                    key={idx}>
                    {msg.odd ? msg.odd : msg.even}
                  </p>
                ))}
              </div>
              <div className='messages-direct-add'>
                <input
                  type='text'
                  placeholder='Start a new messgae'
                />
                <div>
                  <i className='bi bi-send-fill cursor-pointer'></i>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default Messages;
