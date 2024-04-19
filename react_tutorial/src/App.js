import logo from "./logo.svg";
import "./App.css";
import Image_Carousel from "./Components/carousel/Image_Carousel";
import Accordion from "./Components/Acordion/Accordion";
// import Accordion1 from "./Components/Acordion/Accordion1";
import React, { useState } from "react";
import { Questions } from "./Components/Acordion/Questions";

function App() {
  // const [data, setData] = useState(Questions);
  return (
    <div className="App">
      <Image_Carousel></Image_Carousel>

      <div className="container1">
      <h1>Frequently Asked Questions</h1>
      {Questions.map((element) => (
        <Accordion
          key={element.id}
          question={element.question}
          answer={element.answer}
        ></Accordion>
      ))}
      </div>
    </div>
  );
}

export default App;
