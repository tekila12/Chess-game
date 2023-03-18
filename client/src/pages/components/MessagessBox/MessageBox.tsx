import React, { useState, useEffect, useRef } from "react";
import SocketIOClient from 'socket.io-client';
import io from 'socket.io-client';


interface IMsg {
  user: string;
  msg: string;
}

// create random user
const user = "User_" + String(new Date().getTime()).substr(-3);

// component
const MessageBox: React.FC = () => {
  const inputRef = useRef(null);

  // connected flag


  // init chat and message
  const [chat, setChat] = useState<IMsg[]>([]);
  const [msg, setMsg] = useState<string>("");
  useEffect(() => {
    // connect to socket server
    let socket:any;
  
    const fetchSocket = async () => {
      try {
        await fetch("/api/socket");
        socket = io(process.env.BASE_URL || "http://localhost:3000", {
          path: "/api/socket",
          withCredentials: true,
          extraHeaders: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
          },
        });
  
        console.log(process.env.BASE_URL);
  
        // log socket connection
        socket.on("connect", () => {
          console.log("SOCKET CONNECTED!", socket.id);
        
        });
  
        // update chat on new message dispatched
        socket.on("message", (message: IMsg) => {
          chat.push(message);
          setChat([...chat]);
        });
      } catch (err) {
        console.error("Error fetching socket:", err);
      }
    };
  
    fetchSocket();
  
    // socket disconnect on unmount
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const sendMessage = async () => {
    if (msg) {
      // build message obj
      const message: IMsg = {
        user,
        msg,
      };

      // dispatch message to other users
      const resp = await fetch("/api/messagerHandler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      // reset field if OK
      if (resp.ok) setMsg("");
    }

  
    
  };

  return (
    <div className="messageBox" >
      <div >    
      </div>
      <div>
        <div >
          {chat.length ? (
            chat.map((chat, i) => (
              <div key={"msg_" + i} >
                <span
                 
                >
                  {chat.user === user ? "Me" : chat.user}
                </span>
                : {chat.msg}
              </div>
            ))
          ) : (
            <div>
              No chat messages
            </div>
          )}
        </div>
        <div>
          <div>
            <div >
              <input
                ref={inputRef}
                type="text"
                value={msg}
                placeholder={  "Connecting..."}
               
              
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />
            </div>
            <div>
              <button
               
                onClick={sendMessage}
              
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;

