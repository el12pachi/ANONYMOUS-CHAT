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
    socket.on('disconnect', () => {
        let oldUser = user.filter((user) => user[0] !== socket.id)
        console.log(`${oldUser[0][1]} se ha desconectado`);
    });
    let newId = `Anonymous${user.length}`
    user.push([socket.id,newId])
    io.to(socket.id).emit('id', `${newId}`);
    io.emit('joinUser', `${newId}`);
 

    socket.on('send-message', (msg) => {
        io.emit('send-message', msg);
    });
});


httpServer.listen(5000, () => {
    console.log("Server operativo en el puerto 5000");
});


//node C:\Users\el12p\Desktop\ANONYMOUS-CHAT\app\server\socket.js
//npm run dev