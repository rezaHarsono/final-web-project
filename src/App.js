import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./view/home";
import Nama from "./view/nama";
import _header from "./components/header";
import _background from "./components/background";

function App() {
  return (
    <div className="App">
      <div className="conatainer mx-auto">
        <_header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Nama />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
