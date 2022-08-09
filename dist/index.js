"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const sockets_1 = __importDefault(require("./socket/sockets"));
const { createServer } = require('http');
const socketIo = require('socket.io');
const server = createServer(app_1.default);
const io = socketIo(server, { cors: { origin: '*' } }); // you can change the cors to your own domain
app_1.default.use((req, res, next) => {
    // @ts-ignore
    req.io = io;
    return next();
});
// Now all routes & middleware will have access to req.io
sockets_1.default(io);
app_1.default.use('/api', require('./routes/routes'));
server.listen(4000, () => console.log('Server started!'));
