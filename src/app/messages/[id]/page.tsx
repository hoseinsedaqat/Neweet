"use client";

import { stableFillDirect, addMessage } from "@/features/messageSlice";

import SidebarMd from "@/components/layout/sidebar/sidebarmd";

import Sidebar from "@/components/layout/sidebar/sidebar";

import { useSelector, useDispatch } from "react-redux";

import { useParams } from "next/navigation";

import { useEffect, useState } from "react";

import Image from "next/image";

function MessagePrivate() {
  const params = useParams();

  const dispatch = useDispatch();

  const fillDirect = useSelector<any, any>((store) => store.message.fillDirect);

  const [loading, setLoading] = useState(false);

  const [addMsg, setAddMsg] = useState("");

  function sendMessage() {
    dispatch(addMessage({ message: addMsg, id: fillDirect.id }));
    setAddMsg("");
  }

  useEffect(() => {
    if (params.id) {
      dispatch(stableFillDirect({ id: params.id }));
      setLoading(true);
    }
    require("bootstrap/dist/js/bootstrap");
  }, [params.id, dispatch]);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <Sidebar />
          <SidebarMd id='messages-manage-sidebar' />
          {!loading ? (
            <div className='text-center mt-5'>
              <div
                className='spinner-border'
                role='status'>
                <span className='visually-hidden'>Loading...</span>
              </div>
            </div>
          ) : (
            <section
              className='col-md-9'
              id='messages-direct-sm'>
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

export default MessagePrivate;
