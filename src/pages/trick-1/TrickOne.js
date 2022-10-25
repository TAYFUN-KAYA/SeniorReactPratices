import React, { useState } from "react";

const TrickOne = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setTimeout(() => {
      setNumber((currentState) => currentState + 1);
    }, 1000);
  };

  return (
    <div>
      <button onClick={increase}>increase</button>
      {number && <h1>{number}</h1>}
    </div>
  );
};

export default TrickOne;
