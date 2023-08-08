import "./styles.css";
import {useState} from 'react';

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 /100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return <div>
  <BillInput bill={bill} onSet={setBill}/>
  <SelectPercentage percentage={percentage1} onSetPercentage={setPercentage1}>How did you like the servie? : </SelectPercentage>
  <SelectPercentage percentage={percentage2} onSetPercentage={setPercentage2}>How did your friend like the service? : </SelectPercentage>

  {bill > 0 &&(
  <>
  <OutPut bill={bill} tip={tip}/>
  <Reset onReset={handleReset}/> 
  </>
  )}
 
  </div>
}

function BillInput({bill, onSet}) {
  return <div>
    <label>How much was the bill? : </label>
    <input type="text" placeholder="Enter Amount" value={bill} onChange={(e)=>onSet(Number(e.target.value))}></input>
  </div>
}

function SelectPercentage({children, percentage, onSetPercentage}) {
  return <div>
    <label>{children}</label>
    <select value={percentage} onChange={(e)=>onSetPercentage(Number(e.target.value))}>
      <option value="0">It was bad ($0)</option>
      <option value="5">It was okay ($5)</option>
      <option value="10">It was goog ($10)</option>
      <option value="20">It was amazing! ($20)</option>
    </select>
  </div>
}

function OutPut({bill, tip}) {
  return <h3>You pay ${tip + bill} (${bill} + ${tip})</h3>
}

function Reset({onReset}) {
  return <button onClick={onReset}>Reset</button>
}
