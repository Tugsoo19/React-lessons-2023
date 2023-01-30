import React, { useEffect, useState } from "react";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";

function App() {
  const [number, setNumber] = useState(1);
  const [data, setData] = useState([]);
  const [toShow, setToShow] = useState(false);
  const url = "https://course-api.com/react-tabs-project";

  useEffect(() => {
    async function mainData() {
      const fetch_data = await fetch(url);
      const fetchJSON = await fetch_data.json();
      setData(fetchJSON);
    }
    mainData();
  }, []);

  const print = data.map((e, idx) => {
    if (e.order === number) {
      const l = e.duties.length;
      if (l > 3) {
        setToShow(true);
      }
      return (
        <div key={idx} className="company-content">
          <h2 className="job-title">{e.title}</h2>
          <p className="company-name">{e.company}</p>
          <p className="date">{e.dates}</p>

          <div className="text">
            <AiFillCaretRight />
            <p>{e.duties[0]}</p>
          </div>
          <div className="text">
            <AiFillCaretRight />
            <p>{e.duties[1]}</p>
          </div>
          <div className="text">
            <AiFillCaretRight />
            <p>{e.duties[2]}</p>
          </div>
          {toShow ? (
            <div className="text">
              <AiFillCaretRight />
              <p>{e.duties[3]}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
  });
  function handleNumber(e) {
    console.log(e.target.text);

    if (e.target.text === "John") {
      setNumber(1);
    } else if (e.target.text === "Smith") {
      setNumber(2);
    } else if (e.target.text === "Tom") {
      setNumber(3);
    }
  }
  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          <h4>
            <a onClick={handleNumber}>John</a>
          </h4>
          <h4>
            <a onClick={handleNumber}>Smith</a>
          </h4>
          <h4>
            <a onClick={handleNumber}>Tom</a>
          </h4>
        </div>
        <div>{print}</div>
      </div>
    </section>
  );
}

export default App;
