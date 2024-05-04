import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  const[mode, setMode]=useState("SImode")
  const [saving, setSaving] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0);
  const[tableRows,setTableRows]=useState([]);
  const savingRef=useRef(null);
  const yearlySavingsRef = useRef(null);
  const interestRef = useRef(null);
  const durationRef = useRef(null);

  function handleSaving(event) {
    setSaving(parseFloat(event.target.value));
  }

  function handleYearlySaving(event) {
    setYearlySavings(parseFloat(event.target.value));
  }

  function handleInterest(event) {
    setInterest(parseFloat(event.target.value));
  }

  function handleDuration(event) {
    setDuration(parseFloat(event.target.value));
  }
  

  function compound() {
    // setMode("CImode");
    const calculatedRows = [];
    let totalSavings = saving;
    let totalInterest = 0;
  
    for (let i = 1; i <= duration; i++) {
      const yearlyInterest = (totalSavings ) * (interest / 100);
      totalInterest += yearlyInterest;
      totalSavings += yearlySavings + yearlyInterest;
  
      calculatedRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{totalSavings.toFixed(2)}</td>
          <td>{yearlyInterest.toFixed(2)}</td>
          <td>{totalInterest.toFixed(2)}</td>
          <td>NA</td>
        </tr>
      );
    }
  
    setTableRows(calculatedRows);
  }
  function simple(){
    // setMode("SImode");
    const calculatedRows = [];
    let totalSavings = saving;
    let totalInterest = 0;
  
    for (let i = 1; i <= duration; i++) {
      const yearlyInterest = (saving) * (interest / 100);
      totalInterest += yearlyInterest;
      totalSavings += yearlySavings + yearlyInterest;
  
      calculatedRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{totalSavings.toFixed(2)}</td>
          <td>{yearlyInterest.toFixed(2)}</td>
          <td>{totalInterest.toFixed(2)}</td>
          <td>NA</td>
        </tr>
      );
    }
  
    setTableRows(calculatedRows);
  }
  
  function resetValue(){
    setSaving(0);
    setYearlySavings(0);
    setInterest(0);
    setDuration(0);  
  savingRef.current.value="";
  yearlySavingsRef.current.value = "";
  interestRef.current.value = "";
  durationRef.current.value = "";
  }

  return (
    <div className="App">
      <div className='main'>
        <h1>Investment Calculator</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '80px' }}>
          <div>
            <li>CURRENT SAVINGS</li>
            <li>
              <input type='number' placeholder='Enter Amount' onChange={handleSaving} ref={savingRef} />
            </li>
          </div>
          <div>
            <li>YEARLY SAVINGS</li>
            <li>
              <input type='number' placeholder='Enter Amount' onChange={handleYearlySaving} ref={yearlySavingsRef} />
            </li>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', marginTop: '60px' }}>
          <div>
            <li>EXPECTED INTEREST</li>
            <li>
              <input type='number' placeholder='Enter Amount' onChange={handleInterest} ref={interestRef} />
            </li>
          </div>
          <div>
            <li>INVESTMENT DURATION</li>
            <li>
              <input type='number' placeholder='Enter Amount' onChange={handleDuration} ref={durationRef} />
            </li>
          </div>
        </div>
        <button onClick={mode==="SImode" ? simple:compound}>CALCULATE</button>
        <button onClick={resetValue}>RESET</button>
      </div>
      <div className={`${mode}`} style={{marginTop:'20px'}}>
      <button onClick={()=>setMode("SImode")} className='SI'>SIMPLE INTEREST</button>
      <button onClick={()=>setMode("CImode")} className='CI'>COMPOUND INTEREST</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>YEAR</th>
            <th>TOTAL SAVINGS</th>
            <th>INTEREST(YEAR)</th>
            <th>TOTAL INTEREST</th>
            <th>INVESTED CAPITAL</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
}

export default App;
