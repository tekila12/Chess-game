const app =  require ("express") ();
const server = require ('http').createServer(app)
const io = require('socket.io') (server,{cors:{
    origin:"https://localhost:3000",
    methods: ["GET", "POST"]
}})

io.on('connection', () => {
console.log('heelo world')
})

server.listen(5000)