const app =  require ("express") ();
const server = require ('http').createServer(app)
const io = require('socket.io')(server,{
    cors: {
      origin: 'http://localhost:3000',
      methods: 'GET,PUT,POST,DELETE,OPTIONS'.split(','),
      credentials: true
    }
  });

io.on('connection', (socket) => { 
    console.log('connected a new client');
    socket.on("room", function (data){
    io.emit("romms", data)
      console.log(data)
})
})


app.get('/', (req, res) => {
    res.send('Hello World!');
    });


    
server.listen(8080, () => {
    console.log('Server listening on port 8080');
  });