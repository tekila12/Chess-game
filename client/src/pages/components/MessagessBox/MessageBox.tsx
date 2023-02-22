import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';

interface RoomData {
  post: string;
}

const MessageBox: React.FunctionComponent = () => {

  const socket = socketIOClient("http://localhost:8080", { 
  withCredentials: true,});
  const [name, setName] = useState("");
  const [list, setList] = useState<RoomData[]>([]);

  const handlePost = () => {
    socket.emit('room', { post: name });
  };

  socket.on("romms", (data: RoomData) => {
    setList((prevList) => [...prevList, data]);
    console.log(data);
  });

  return (
    <div>
        <input style={{ width: "100vw", height: "10vh", background: 'grey'}} type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={handlePost}>Send</button>
        {list.map((p) => (
          <div key={p.post}><li>{p.post}</li></div>
        ))}
    </div>
  );
};

export default MessageBox;