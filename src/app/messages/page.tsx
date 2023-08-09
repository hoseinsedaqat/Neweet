"use client";

import SidebarMd from "@/components/layout/sidebar/sidebarmd";

import Sidebar from "@/components/layout/sidebar/sidebar";

import { useSelector, useDispatch } from "react-redux";

import { addMessage, switchDirectShow } from "@/features/messageSlice";

import { useEffect, useState } from "react";

import Image from "next/image";

import Link from "next/link";

function Messages() {
  const messages = useSelector<any, any>((store) => store.message.messages);

  const fillDirect = useSelector<any, any>((store) => store.message.fillDirect);

  const [directEmpty, setDirectEmpty] = useState(true);

  const dispatch = useDispatch();

  const [addMsg, setAddMsg] = useState("");

  function switchDirect(name: string) {
    dispatch(switchDirectShow({ name }));
    setDirectEmpty(false);
  }

  function sendMessage() {
    dispatch(addMessage({ message: addMsg, id: fillDirect.id }));
    setAddMsg("");
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
            {/* for small Size */}
            {messages.map((user: any, idx: number) => (
              <Link
                href={`/messages/${user.id}`}
                className='messages-user-sm'
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
                    <small className='text-muted mx-1'>
                      @{user.username.substring(0, 5) + "..."}
                    </small>
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
              </Link>
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
                {fillDirect.directs && (
                  <>
                    {fillDirect.directs.map((msg: any, idx: number) => (
                      <p
                        className={
                          msg.odd
                            ? "bg-primary text-white trm"
                            : "bg-secondary text-white tlm"
                        }
                        key={idx}>
                        {msg.odd ? msg.odd : msg.even}
                      </p>
                    ))}
                  </>
                )}
              </div>
              <div className='messages-direct-add'>
                <input
                  type='text'
                  placeholder='Start a new messgae'
                  value={addMsg}
                  onChange={(e) => setAddMsg(e.target.value)}
                />
                <div onClick={() => sendMessage()}>
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
