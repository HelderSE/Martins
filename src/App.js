import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Padaria from "./Pages/Padaria";
import Caixa from "./Pages/Caixa";

function App() {
  /*const socket = new WebSocket("ws://localhost:8080");

  socket.onmessage = ({ data }) => {
    console.log("message from server ", data);
  };

  document.querySelector("button").onclick = () => {
    socket.send("hello");
  };
*/
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Padaria" element={<Padaria />} />
          <Route path="/Caixa" element={<Caixa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
