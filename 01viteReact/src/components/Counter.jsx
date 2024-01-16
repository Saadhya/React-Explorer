import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    if (count < 20) setCount(count + 2);
    else alert("More than 20 is not allowed");
  };
  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("negative value is not valid");
    }
  };
  return (
    <div>
      <h1>Learning Vite + React with chai & code</h1>
      <h2 className="bg-green"> counter: {count} </h2>
      <div className="card">
        <button onClick={addCount}>add count {count}</button>
        <button onClick={removeCount}>remove count {count}</button>
      </div>
    </div>
  );
};

export default Counter;
