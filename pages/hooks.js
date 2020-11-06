import { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((number) => number + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <div>Count: {count}</div>
    </div>
  );
};

export default Hooks;
