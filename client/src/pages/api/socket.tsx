import { Server, } from "socket.io";
import { Server as HttpServer } from "http";
import messageHandler from "./messageHandler";

export default function SocketHandler(req: any, res: { socket: { server: { io: any; }; }; end: () => void; }) {
  // It means that socket server was already initialised
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const server = new HttpServer();
  const io = new Server(server, {
    cors: {
      origin: "*", // update this to match your needs
      methods: ["GET", "POST"] // update this to match your needs
    }
  });

  const onConnection = (socket: any) => {
    messageHandler(io, socket);
  };

  // Define actions inside
  io.on("connection", onConnection);

  console.log("Setting up socket");
  res.end();
}
