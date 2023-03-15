import { Socket } from "socket.io";

export default (io: any, socket: Socket) => {
  const createdMessage = (msg: any) => {
    socket.broadcast.emit("newIncomingMessage", msg);
  };

  socket.on("createdMessage", createdMessage);
};