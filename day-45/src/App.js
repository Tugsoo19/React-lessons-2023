import logo from './logo.svg';
import './App.css';
import Accordion from './component/Accordion';
import Index from './component/Index';

import { Routes, Route } from 'react-router-dom'
import Login from './component/Login';
import Home from './component/Home';
import Register from './component/Register';




function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Index />} /> */}
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;
