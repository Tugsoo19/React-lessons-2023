import logo from './logo.svg';
import './App.css';
import Assign from './component/assign';
import Counter from './component/counter';
import UpdateArrays from './component/UpdateArrays';
import List from './component/SpreadArray';
import UpdatingObjects from './component/UpdatingObjects';

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
      
    </div>
    
  );
}

export default App;
