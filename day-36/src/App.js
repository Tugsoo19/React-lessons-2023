
import './App.css';
import { Button } from 'react-bootstrap';
import MainMenu from './components/MainMenu';


function App() {
  return (
    <div className="App">

      <div className='menu-Container'>
        <MainMenu />
      </div>


      <h1>React Bootstrap Component</h1>
      <>
      <Button variant="primary">React Bootstrap Component</Button>{' '}
      </>
    </div>
  );
}

export default App;
