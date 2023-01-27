import React from "react"
import './App.css';
import { AiFillCaretRight } from "react-icons/ai"
import { useState } from "react";
import { useEffect } from "react";
import myData from "./myData";

function App() {
  // const url = "https://course-api.com/react-tabs-project";

  const [show, setShow] = useState(false)

  const data = myData.map((d) => {
    console.log(d.title);
    console.log(d.duties);


    return (
      <div className="company-content">
        <h2 className="job-title">{d.title}</h2>
        <p className="company-name">{d.company}</p>
        <p className="date">{d.dates}</p>
        <div className="text">
          <AiFillCaretRight />
          <p>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>
        </div>
        <div className="text">
          <AiFillCaretRight />
          <p>Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.</p>
        </div>
        <div className="text">
          <AiFillCaretRight />
          <p>Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.</p>
        </div>
      </div>
    )
  })


  // async function fetchData() {
  //   const fetchedData = await fetch(url)
  //   const fetchedJSON = await fetchedData.json();
  //   setData(fetchedJSON)
  //   console.log(fetchData);
  // }

  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          <h4>John</h4>
          <h4>Smith</h4>
          <h4>Tom</h4>
        </div>


      </div>
    </section>
  );
}

export default App;
