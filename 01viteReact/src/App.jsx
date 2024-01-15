import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    if (count < 20) setCount(count + 1);
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
    <>
      <h1>Learning Vite + React with chai & code</h1>
      <h2> countter: {count} </h2>
      <div className="card">
        <button onClick={addCount}>add count {count}</button>
        <button onClick={removeCount}>remove count {count}</button>
      </div>
    </>
  );
}

export default App;
