import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./view/home";
import Nama from "./view/nama";
import _header from "./components/header";

function App() {
  return (
    <div className="App">
      <_header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nama" element={<Nama />}></Route>
      </Routes>
    </div>
  );
}

export default App;
