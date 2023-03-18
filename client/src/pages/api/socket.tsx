import { NextApiRequest, NextApiResponse } from "next";
import { Server as ServerIO } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();

const io = new ServerIO(httpServer, {
  path: "/api/socket",
  cors: {
    origin: "*", // or specify your client's origin here
    methods: ["GET", "POST"],
  },
});

httpServer.listen(3000, () => {
  console.log("Socket.io server running on port 3000");
});

// log when a client connects to the server
io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);
});

// log any errors that occur on the server
io.on("error", (err) => {
  console.log(`Server error: ${err}`);
});

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.end();
};