import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [slider, setSlider] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleCountDec() {
    setCount((c) => c - slider);
  }

  function handleCountInc() {
    setCount((c) => c + slider);
  }

  function handleReset() {
    setCount(0);
    setSlider(1);
  }

  return (
    <div style={{ alignitems: "center", textAlign: "center" }}>
      <div>
        <input
          type="range"
          value={slider}
          min={0}
          max={10}
          onChange={(e) => setSlider(Number(e.target.value))}
        />
        <span>{slider}</span>
      </div>
      <div>
        <button onClick={handleCountDec}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountInc}>+</button>
      </div>

      <p>
        {count} days from {new Date().toDateString()} is {date.toDateString()}
      </p>

      {/* To show the reset button we can do this in two ways.. */}

      {/* <button
        style={
          count !== 0 || slider !== 1
            ? { display: "inline" }
            : { display: "none" }
        }
        onClick={handleReset}
      >
        Reset
      </button> */}

      {/* we can also do this in this way conditionally render the part */}

      {count !== 0 || slider !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
