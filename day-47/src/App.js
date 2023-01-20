import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <div className='hover'>
        <Counter />
        <Counter />
      </div>

    </div>
  );
}

export default App;
