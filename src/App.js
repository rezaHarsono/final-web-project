import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./view/home";
import Nama from "./view/nama";
import Reza from "./view/reza";
import _Header from "./components/header";
import _background from "./components/background";

function App() {
  return (
    <div className="App">
      <div className="conatainer mx-auto">
        <_Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nama" element={<Nama />}></Route>
          <Route path="/reza" element={<Reza />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
