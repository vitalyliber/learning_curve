import { useState, useEffect } from "react";

const HooksArray = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [id, setId] = useState(0);
  useEffect(() => console.log(id), [id]);
  useEffect(() => console.log(list[list.length - 1]), [list]);
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          const newId = id + 1;
          setList([...list, { value, id: newId }]);
          setValue("");
          setId(newId);
        }}
      >
        Add
      </button>
      {list.map(({ id, value }) => {
        return (
          <div key={id} style={{ flexDirection: "row", display: "flex" }}>
            <div>el: {value}</div>
            <div
              style={{
                marginLeft: 10,
                color: "red",
              }}
              onClick={() => {
                setList(list.filter((el) => el.id !== id));
              }}
            >
              Remove
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HooksArray;
