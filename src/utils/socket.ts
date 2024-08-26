import { io, Socket } from 'socket.io-client';

const URL = "http://localhost:3001";
const socket: Socket = io(URL, { path: "/socket.io" });

export default socket;
