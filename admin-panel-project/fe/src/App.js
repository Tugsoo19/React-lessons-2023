import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Users from './pages/User';
import VerticalTabs from './component/SideBar';
import SideBar from './component/SideBar';

function App() {
  return (
    <div className="App">
      <h1>Admin Panel Project</h1>
      <SideBar />

      <Routes>
        <Route path='/users' element={<Users />} />

      </Routes>
    </div>
  );
}

export default App;
