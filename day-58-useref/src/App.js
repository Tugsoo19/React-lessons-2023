import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import List from './component/List';
import { ImageContext } from './context/ImageContext';
import Stopwatch from './component/Stopwatch';

function App() {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext)

  return (
    <div className="App">
      <h1> Day-58 useRef Hook</h1>
      {/* <label>Use large Images
        <input
          type='checkbox'
          onChange={(e) => setIsLarge(e.target.checked)}></input>
      </label>

      <hr />
      <List /> */}

      <Stopwatch />
    </div>
  );
}

export default App;
