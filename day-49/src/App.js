import logo from './logo.svg';
import './App.css';

import Fancy from './component/Fancy';
import Timer from './component/Timer';
import TimerDashboard from './component/TimerDashboard';

function App() {


  return (
    <div className="App">
      <h1>Timer app</h1>
      {/* <Fancy /> */}
      {/* <Timer /> */}
      <TimerDashboard />

    </div>
  );
}

export default App;
