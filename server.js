// const WebSocket = require('ws');
// 0
// const server = new WebSocket.Server({ port: 9000 });

// server.on('connection', (socket) => {
//   console.log('Client connected');

//   socket.on('message', (message) => {
//     const data = JSON.parse(message);
//     console.log('Received data:', data);
//     // 여기서 받은 데이터를 처리하거나 저장할 수 있습니다.
//   });

//   socket.on('close', () => {
//     console.log('Client disconnected');
//   });
// });

// console.log('WebSocket server is running on ws://localhost:9000');

// express, ws 객체 생성

// const { WebSocketServer } = require("ws")

// const wss = new WebSocketServer({ port: 3000 })

// // 웹소켓 서버 연결 이벤트 바인드
// wss.on("connection", ws => {
//   // 데이터 수신 이벤트 바인드
//   ws.on("message", data => {
//     console.log(`Received from user: ${data}`)
//   })
// })

const express = require('express');
const server = express();

server.use("/", function(req,res){
  res.sendFile(__dirname + '/index.html');
});

server.listen(9000);

const WebSocket = require('ws');

const socket = new WebSocket.Server({
  port : 7777
});

socket.on('connection',(ws,req)=>{

  ws.on('message',(msg)=>{
    console.log("유저 :" + msg)
    ws.send("ㅇㅇ");
  })
})