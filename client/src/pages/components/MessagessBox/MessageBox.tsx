import io from "socket.io-client";
import { useState, useEffect } from "react";

let socket:any

type Message = {
  author: string;
  message: string;
};

export default function MessageBox() {
  const [username, setUsername] = useState("");
  const [chosenUsername, setChosenUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<Message>>([]);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    await fetch("/api/socket");
    socket = io();
    socket.on("newIncomingMessage", (msg:any) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: msg.author, message: msg.message },
      ]);
      console.log(messages);
    });
  };

  const sendMessage = async () => {
    socket.emit("createdMessage", { author: chosenUsername, message });
    setMessages((currentMsg) => [
      ...currentMsg,
      { author: chosenUsername, message },
    ]);
    setMessage("");
  };

  const handleKeypress = (e:any) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  return (
    <div className="messageBox">
      <main>
        {!chosenUsername ? (
          <>
            <h3>
             
            </h3>
            <input
              type="text"
              placeholder="Identity..."
              value={username}
            
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={() => {
                setChosenUsername(username);
              }}
              
            >
              Go!
            </button>
          </>
        ) : (
          <>
            <p >
              Your username: {username}
            </p>
            <div >
              <div >
                {messages.map((msg, i) => {
                  return (
                    <div                    
                      key={i}
                    >
                      {msg.author} : {msg.message}
                    </div>
                  );
                })}
              </div>
              <div >
                <input
                  type="text"
                  placeholder="New message..."
                  value={message}
                 
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={handleKeypress}
                />
                <div>
                  <button
                    
                    onClick={() => {
                      sendMessage();
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}