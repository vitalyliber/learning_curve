// see all fields by url https://api.github.com/repos/microsoft/typescript/issues
import React, { useState } from "react";
export default function ({
  item: {
    title,
    user: { login },
  },
}) {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => setActive((status) => !status)}
      style={{
        margin: 10,
        padding: 10,
        backgroundColor: active ? "#ffdcd8" : "#d8fff4",
        position: "relative",
      }}
    >
      <div style={{ color: "red", marginBottom: 10 }}>{login}</div>
      <div>{title}</div>
      <div
        style={{
          position: "absolute",
          right: 10,
          top: 10,
          fontSize: 12,
          color: "gray",
        }}
      >
        click by card
      </div>
    </div>
  );
}
