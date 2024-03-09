'use client'

import { useState, useEffect } from "react";
import { Recived, Send } from "./msg.js"
import io from 'socket.io-client';
let socket

export default function Home() {
  const [send, setSend] = useState("");
  const [msg, setMsg] = useState([]);
  const [id, setId] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('send-message', [id, send]);
    setSend("");
  }
  //que se ejecute una vez y resposive con el padding de la pantalla, crearr mensaje se a unido ...
  useEffect(() => {
    socket = io('http://88.5.18.191:5000/');

    socket.on('send-message', (message) => {
      setMsg(p1 => [...p1, message]);
    });

    socket.on('id', (id) => {
      setId(id);
    });

    return () => {
      socket.off();
    }
  }, []);

  return (
    <>
      <div className="h-screen w-screen bg-[#333333] flex items-center justify-center">
        <form onSubmit={sendMessage}>
          <div className="bg-[#3F3F3F] w-screen max-w-[900px] h-screen max-h-[700px] rounded-[50px] flex justify-end flex-col overflow-hidden relative">
            <div className="w-full h-24 bg-[#0D99FF] flex justify-center items-center text-3xl text-white font-bold sm:text-5xl">CHAT ANONYMOUS</div>
            <div className="bg-[#3F3F3F] h-full overflow-y-scroll pb-16">
              {msg.map((message, index) => {
                return (
                  message[0] == id ? <Send msg={message[1]} key={index} /> : <Recived msg={message[1]} key={index} />
                )
              })}
            </div>
            <div className="w-full flex items-center justify-center h-auto absolute bottom-0 p-4  gap-3">
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
        </form>
      </div>
    </>
  )

}