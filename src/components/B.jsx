import React, { useEffect } from "react";
import { useState } from "react";

const B = (props) => {
  const { count, step, shouldAdd, setCount, secondsAutoclick } = props;
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [continueAutoCLick, setContinueAutoCLick] = useState(true);
  const add = () => {
    setCount((lastCount) =>
      shouldAdd ? Number(lastCount) + Number(step) : lastCount - step
    );
  };

  const start = () => {
    setButtonDisabled(true);
    const timeouts = [];
    for (let i = 0; i < secondsAutoclick; ++i) {
        const timeout = setTimeout(() => {
            add();
        }, i * 1000);
        timeouts.push(timeout)
    }

    setTimeout(() => {
        timeouts.forEach(timeout => clearTimeout(timeout));
    }, secondsAutoclick * 1000)
    
   
  };

  const stop = () => {
    setContinueAutoCLick(false);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={add} disabled={buttonDisabled}>
        Add
      </button>
      <button
        onClick={start}
        disabled={buttonDisabled}
      >
        
        start!
      </button>

      <button onClick={stop} >Stop</button>
    </>
  );
};

export default B;
