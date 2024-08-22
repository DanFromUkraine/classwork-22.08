
import { useState } from 'react';
import './App.css';
import B from './components/B';
import N from './components/N';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [shouldAdd, setShouldAdd] = useState(true);
  const [secondsAutoclick, setSecondsAutoclick] = useState(10);
  return (
    <>
      <B count={count} step={step} shouldAdd={shouldAdd} setCount={setCount} secondsAutoclick={secondsAutoclick}/>
      <N step={step} setStep={setStep} setShouldAdd={setShouldAdd} shouldAdd={shouldAdd} secondsAutoclick={secondsAutoclick} setSecondsAutoclick={setSecondsAutoclick}/>
    </>
  )
}

export default App
