import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SoldProvider } from "./soldContext";

/*const WebSocket = require("ws");
const server = new WebSocket.Server({ port: "8080" });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.send("");
  });
});*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SoldProvider>
      <App />
    </SoldProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
