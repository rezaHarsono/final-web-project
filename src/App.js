import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./view/about";
import Nama from "./view/nama";
import _header from "./components/header";

function App() {
  return (
    <div className="App">
      <_header />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/nama" element={<Nama />}></Route>
      </Routes>
    </div>
  );
}

export default App;
