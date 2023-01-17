import logo from './logo.svg';
import './App.css';
import Accordion from './component/Accordion';
import Index from './component/Index';
import About from './component/AboutPage';
import {Routes , Route} from 'react-router-dom'
import HomePage from './component/HomePage';
import Movies from './component/Movies';
import Movie from './component/Movie';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movie/:id" element={<Movie/>} />
      </Routes>
    </div>
  );
}

export default App;
