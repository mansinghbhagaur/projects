import React from "react";
import { useState } from "react";

const Class1 = () => {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h1>useState Hook</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Class1;
