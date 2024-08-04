import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import http from 'http';
import { WebSocketServer } from 'ws';

// ROUTES
import authRoute from "./routes/auth.js";
import Users from "./routes/users.js";
import postRoute from "./routes/posts.js";
import followRoute from "./routes/followers.js";
import Likes from "./routes/likes.js";
import Stories from "./routes/stories.js";
import Comments from "./routes/comments.js";
import Replies from "./routes/commentReplies.js";
import Stores from "./routes/marketplace.js";

const app = express();

// MIDDLEWARES AND CONTROLLERS
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
config();
app.use('/api/v1/user', authRoute);
app.use('/api/v1/user', Users);
app.use('/api/v1/posts/', postRoute);
app.use('/api/v1/reach/', followRoute);
app.use(Likes);
app.use('/api/v1/comments', Comments);
app.use('/api/v1/replies', Replies);
app.use('/api/v1/stories', Stories);
app.use('/api/v1/stores', Stores);

const port = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws, request) => {
    const userId = request.url.slice(1);

    console.log(`WebSocket connection established with user ${userId}`);
  
    ws.on('message', (message) => {
      console.log(`Received message ${message} from user ${userId}`);
      
      // Broadcast the message to all other connected clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocketServer.OPEN) {
          client.send(`User ${userId} says: ${message}`);
        }
      });
    });
  
    ws.on('close', () => {
      console.log(`WebSocket connection with user ${userId} closed`);
    });
    ws.send('WSS working fine')
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});