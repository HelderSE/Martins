import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Padaria from "./Pages/Padaria";
import Caixa from "./Pages/Caixa";

function App() {
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
