const app =  require ("express") ();
const server = require ('http').createServer(app)
const io = require('socket.io') (server,{cors:{
    origin:"*",
    methods: ["GET", "POST"]
}})

io.on('connection', (socket) => { 

socket.on("room", function (data){
    console.log(data)
    io.emit("romms", data)
})
})
app.get('/', (req, res) => {
    res.send('Hello World!');
    });
    
server.listen(5000, () => {
    console.log('Server listening on port 5000');
  });