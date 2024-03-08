const http = require('http');
const { Server } = require('socket.io');
const httpServer = http.createServer();
let user = []

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    let newId = `Anonymous${user.length}`
    user.push(newId)
    io.to(socket.id).emit('id', `${newId}`);

    socket.on('send-message', (msg) => {
        io.emit('send-message', msg);
    });
});


httpServer.listen(5000, () => {
    console.log("Server operativo en el puerto 5000");
});


//node \app\server\socket.js
//npm run dev