import logo from "./logo.svg";
import "./App.css";
import Image_Carousel from "./Components/carousel/Image_Carousel";
import Accordion1 from "./Components/Acordion/Accordion1";
// import Accordion from "./Components/Acordion/Accordion";
import React, { useState } from "react";
import { Questions } from "./Components/Acordion/Questions";
import { Route,Routes,Router } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";

function App() {
  // const [data, setData] = useState(Questions);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Image_Carousel/>} />
        <Route exact path="/accordion" element={<Accordion1/>} />
      </Routes>
      
      </div>
  );
}

export default App;
