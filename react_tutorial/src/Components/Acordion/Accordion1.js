import React,{useState} from "react";
import Accordion from "./Accordion";
import { Questions } from './Questions';
import './Accordion.css';


function Accordion1(){
  return(
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
  )
}
export default Accordion1;