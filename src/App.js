import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./view/home";
import Reza from "./view/reza";
import Ghavio from "./view/ghavio";
import Contact from "./view/contact";
import _Header from "./components/header";
import Footer from "./components/footer";
import _background from "./components/background";

function App() {
  return (
    <div className="App">
      <div className="conatainer mx-auto">
        <_Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/reza" element={<Reza />}></Route>
          <Route path="/ghavio" element={<Ghavio />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
