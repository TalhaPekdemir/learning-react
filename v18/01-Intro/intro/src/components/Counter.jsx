import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [changeBy, setChangeBy] = useState(1);

  function increment() {
    setCount(count + changeBy);
  }

  function decrement() {
    setCount(count - changeBy);
  }

  function increaseChange() {
    setChangeBy(changeBy + 1);
  }

  function decreaseChange() {
    if (changeBy < 2) return;
    setChangeBy(changeBy - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h2>Changing by value {changeBy} </h2>
      <button onClick={increaseChange}>Increase Change Speed</button>
      <button onClick={decreaseChange}>Decrease Change Speed</button>
    </div>
  );
}
