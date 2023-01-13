import logo from './logo.svg';
import './App.css';
import Assign from './component/assign';
import Counter from './component/counter';
import UpdateArrays from './component/UpdateArrays';
import List from './component/SpreadArray';
import UpdatingObjects from './component/UpdatingObjects';
import Exercises from './component/Exercises';

function App() {
 
  
  return (
    <div className="App">
      <div>
        <Assign/>
      </div>
      <div>
        <Counter />
      </div>
      <UpdateArrays/>
      <List/>
      <UpdatingObjects/>
      <Exercises />
    </div>
    
  );
}

export default App;
