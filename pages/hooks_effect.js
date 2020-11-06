import { useState, useEffect } from "react";
import Link from "next/link";

const Hooks = () => {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("Secret page"), []);
  useEffect(() => {
    console.log("What???");
    if (count > 5) {
      alert("Please, stop it!!!");
    }
    // this func run after all
    return () => alert('You leave this page')
  }, [count]);

  return (
    <div>
      <Link href="/hooks_arrays">
        <a>Hooks arrays page</a>
      </Link>
      <br/>
      <button onClick={() => setCount((number) => number + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
      <div>Count: {count}</div>
    </div>
  );
};

export default Hooks;
