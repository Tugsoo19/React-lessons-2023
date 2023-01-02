import logo from './logo.svg';
import './App.css';

import img1 from './products/image-aqua.png'
import img2 from './products/image-rose.png'
import img3 from './products/image-steel.png'
import img4 from './products/image-yellow.png'




function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header> */}

      <h1 className="header">Popular Products</h1>
      <div className="body">
        <div className="section">
          <img src={img1} className="image"></img>
          <div className="right-text">
            <p className="title">Haught or Naught</p>
            <p>High-minded or absent-minded? You decide</p>
          </div>

        </div>

        <div className="section">
          <img src={img2} className="image"></img>
          <div className="right-text">
            <p className="title">Yellow Pail</p>
            <p>On-demand sand castle construction expertise.</p>
          </div>

        </div>
        <div className="section">
          <img src={img3} className="image"></img>
          <div className="right-text">
            <p className="title">tinfoild: Tailored tinfoil hats</p>

            <p>We already have your measurements and shipping address.</p>
          </div>

        </div>
        <div className="section">
          <img src={img4} className="image"></img>
          <div className="right-text">
            <p className="title">Supermajority: The Fantasy Congress League</p>

            <p>Earn points when your favorite politicians pass legislation.</p>
          </div>

        </div>


       
      </div>





    </div>

  );
}

export default App;




