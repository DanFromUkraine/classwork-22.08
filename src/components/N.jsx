import React, { useState } from "react";

const N = (props) => {
  const { step, setStep, setShouldAdd, shouldAdd } = props;
  

  const inputHandler = (e) => {
    e.preventDefault();
    if (isNaN(Number(e.target.value))) {
      e.target.style.backgroundColor = "red";
    } else {
      e.target.style.backgroundColor = "white";
      setStep(e.target.value);
    }
  };
  return (
    <>
      <div>
        <input defaultValue={step} onChange={inputHandler}></input>
        <p>current step: {step}</p>
      </div>
      <select onChange={() => {
        console.log(shouldAdd)
        setShouldAdd(!shouldAdd)
      }}>
        <option>Додати</option>
        <option>Відняти</option>
      </select>
    </>
  );
};

export default N;
