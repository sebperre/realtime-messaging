import { WebSocketServer } from "ws";

const PORT = 8080;

const wss = new WebSocketServer({ port: PORT });
const clients = new Set();

wss.on("connection", function connection(ws) {
  clients.add(ws);

  ws.on("message", function message(data) {
    console.log("received: %s", data);
    clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(JSON.parse(data)));
      }
    });
  });
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);
