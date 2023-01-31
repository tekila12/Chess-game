import React, { useState } from 'react';
import { io } from 'socket.io-client';


const MessageBox: React.FunctionComponent = () => {
  
  const socket = io("http://localhost:5000", {transports:['websocket']})
  const [name, setName] = useState("")
  const [list, setList] = useState([])


  const handlePost= () =>{
    socket.emit('room', {post:name})
  }

  socket.on("romms", (data)=>{
    console.log(data)
  })
  return (
    <div>
        <input  type='text' onChange={(e)=> setName(e.target.value)}/>
        <button onClick={handlePost}>Send</button>
</div>
  );
};

export default MessageBox;