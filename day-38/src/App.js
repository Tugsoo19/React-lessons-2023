
import './App.css'
import Button from './components/Button';
import ParentToolbar from './components/ParentToolbar';
import Signup from './components/SignUp';
import Toolbar from './components/ToolBar';
import ToolbarNext from './components/ToolbarNext';


function App() {
  return (
    <div className="App">
      <h1>Day-38 React Events</h1>
      <Button />
      <Toolbar />
      <ToolbarNext />
      <ParentToolbar />
      <Signup />
      
    </div>
    
  );
}

export default App;
