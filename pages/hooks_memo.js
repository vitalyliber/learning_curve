import { useState, useMemo } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const text = useMemo(() => {
    console.log('recalculate')
    return `Count: ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((number) => number + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <div>{text}</div>
    </div>
  );
};

export default Hooks;
