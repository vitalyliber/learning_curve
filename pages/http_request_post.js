import { useState } from "react";

const Hooks = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input value={value} onChange={(el) => setValue(el.target.value)} />
      <button
        onClick={async () => {
          try {
            const response = await fetch("/api/message", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ message: value }),
            });
            let result = await response.json();
            alert(result.status);
            setValue("");
          } catch (e) {
            alert("Error!");
          }
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Hooks;
