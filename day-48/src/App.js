
import './App.css';
import Input from './component/input';
import { useState } from 'react';
import Anime from './component/Anime';
import Button from './component/Button';
import TopAnime from './component/TopAnime';
import Exercises from './component/Exercises';
import FindEvenOdd from './component/Ex-Find-Even-Odd';
import Pascal from './component/Pascal';


function App() {

  const [text, setText] = useState([])

  function handleChange(e) {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <h1>day-48</h1>
      <Exercises />
      <FindEvenOdd />
      <Pascal />
      {/* <Input label="first" value={text} onChange={handleChange} />
      <Input label="second" value={text} onChange={handleChange} /> */}
      {/* <Anime />
      <Button />
      <TopAnime /> */}
    </div>
  );
}

export default App;
