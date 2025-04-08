'use client'

import { useState, useEffect, useRef } from "react";
import { Recived, Send } from "./msg.js"
import io from 'socket.io-client';
import Alert from './alert.js'
let socket

export default function Home() {
  const [send, setSend] = useState("");
  const [msg, setMsg] = useState([]);
  const [id, setId] = useState("");
  const [alert, setAlert] = useState([]);
  const msgEnd = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('send-message', [id, send]);
    setSend("");
  }

  const createAlert = (message) => {
    setAlert(p1 => [...p1, message]);
    setTimeout(() => {
      setAlert(p1 => [p1.slice(1)]);
    }, 5000);
  }

  useEffect(() => {
    msgEnd.current.scrollIntoView({ behavior: 'smooth' });
  }, [msg]);
  useEffect(() => {
    socket = io('http://10.10.14.169:5000/');

    socket.on('send-message', (message) => {
      setMsg(p1 => [...p1, message]);
    });

    socket.on('id', (id) => {
      setId(id);
    });

    socket.on('joinUser', (message) => {
      createAlert(`${message}`);
    })

    return () => {
      socket.off();
    }
  }, []);

  return (
    <>
      <div className="absolute flex flex-col gap-2 p-2 z-10 w-64">
        {alert.map((message, index) => {
          return (
            <Alert msg={message} key={index} />
          )
        })}
      </div>
      <div className="h-screen w-screen bg-[#333333] flex items-center justify-center">
        <form onSubmit={sendMessage} className="w-full h-full p-0 sm:p-6 flex items-center justify-center">
          <div className="bg-[#3f3f3f] w-full max-w-[900px] h-full max-h-[700px] rounded-[50px] flex justify-end flex-col overflow-hidden relative">
            <div className="w-full top-0 h-24 bg-[#0D99FF] absolute z-20 flex justify-center items-center text-3xl text-white font-bold sm:text-5xl">CHAT ANONYMOUS</div>
            <div className="overflow-y-scroll pb-16 pt-24">
              {msg.map((message, index) => {
                return (
                  message[0] == id ? <Send msg={message[1]} key={index} /> : <Recived msg={message[1]} key={index} />
                )
              })}
              <div ref={msgEnd} />
              <div className="w-full flex items-center justify-center h-auto absolute bottom-1 p-4  gap-3">
                <input type="text"
                  className="w-full h-10 rounded-[59px] bg-[#D7D7D7] text-2xl p-4 focus:outline-none text-[#333333]"
                  value={send}
                  onChange={(e) => setSend(e.target.value)}
                >
                </input>
                <input type="submit"
                  className="w-24 h-10 bg-[#0D99FF] text-white text-2xl font-bold rounded-[59px] hover:bg-[#429fe1]"
                  value="Send"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )

}