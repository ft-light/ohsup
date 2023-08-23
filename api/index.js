import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import DB_connect from './config/db.js';
import User from './routes/auth.js';

const app = express();
const server = createServer(app);
const io = new Server(server, {});
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', User);

io.on('connection', (socket) => {

});

DB_connect();

server.listen(port, () => console.log(`Listening in port ${port}...`));