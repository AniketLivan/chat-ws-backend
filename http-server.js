const express = require('express');
const http = require('http');

const WebSocket = require('ws');
const bodyParser = require("body-parser");
const clients = require('./clients');
const swaggerDocs = require('./swagger');

const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });


wss.on('connection', function connection(ws) {
  console.log('Client connected');
  clients.push(ws);

  ws.on('close', () => {
    console.log('Client disconnected');
    clients = clients.filter(client => client !== ws);
  });
});

swaggerDocs(app, port)
app.use(require('./router'));

server.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});