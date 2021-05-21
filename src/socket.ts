import io from "socket.io-client";
//@ts-ignore
const socket = io.connect("http://localhost:5000/");

export default socket;
