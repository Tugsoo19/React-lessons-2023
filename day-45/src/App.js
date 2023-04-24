import logo from "./logo.svg";
import "./App.css";
import Accordion from "./component/Accordion";
import Index from "./component/Index";
import LoginTest from "./component/LoginTest";

import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";

import Signup from "./component/SignupTest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginTest />} />
        <Route path="/" element={<Home />} />
        {/* <Route path='/' element={<Index />} /> */}
        {/* <Route path="/accordion" element={<Accordion />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
