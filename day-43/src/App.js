import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link} from 'react-router-dom'
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import FeedbackForm from './components/FeedbackForm';
import Home from './components/Home';
import Test from './components/Test';
import Khangai from './components/About/Khangai';
import Usukhuu from './components/About/Usukhuu';
import NotFound from './components/NotFound';
// import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <h1> Day-43 React Routes</h1>
      <div id='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/about/test'}>About</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/feedback'}>Feedback</Link>

      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/about/*" element={<About />} >
          <Route path="khangai" element={<Khangai />} />
          <Route path="usukhuu" element={<Usukhuu />} />
          <Route path="test" element={<Test />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
