import logo from './logo.svg';
import './App.css';
import Assign from './component/assign';
import Counter from './component/counter';

function App() {

  
  return (
    <div className="App">
      <div>
        <Assign/>
      </div>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
