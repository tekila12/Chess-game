import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "src/types/next";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    console.log("New Socket.io server...");
    // adapt Next's net Server to http Server
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: "/api/socket",
      cors: {
        origin: "*", // or specify your client's origin here
        methods: ["GET", "POST"]
      }
    });
    // append SocketIO server to Next.js socket server response
    res.socket.server.io = io;

    // log when a client connects to the server
    io.on("connection", (socket) => {
      console.log(`Client connected: ${socket.id}`);
    });

    // log any errors that occur on the server
    io.on("error", (err) => {
      console.log(`Server error: ${err}`);
    });
  }

  res.end();
};