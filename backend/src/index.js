// const express = require("express");
// const app = express();
// const PORT = 4000;

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const clients = new Set();

wss.on("connection", function connection(ws) {
  clients.add(ws);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });
  const test = { message: "hello from server" };

  setInterval(() => {
    ws.send(JSON.stringify(test));
  }, 3000);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });
