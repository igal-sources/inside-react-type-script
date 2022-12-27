import React, { useState } from "react";
import "./list-with-add-item.css";

const InitialList = [
  { id: 1, name: "Learn CSS" },
  { id: 2, name: "Learn HTML" },
  { id: 3, name: "Learn JavaScript" },
  { id: 4, name: "Learn React" },
  { id: 5, name: "Learn TypeScript" },
];

export const ListWithAddItem = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(InitialList);

  const getMaxId = () => {
    const maxId = Math.max(...list.map((item) => item.id));
    return maxId + 1;
  };

  const handleChange = (event) => {
    setValue(event.target.value);

    const res = list.map(item => {
      return `id: ${item.id} - name: ${item.name}`;
    })

    console.log("res: ", res);
  };

  const handleSubmit = (event) => {
    if (value) {
      setList([...list, { id: getMaxId(), name: value }]);

      setValue("");
      console.log("list: ", list);
    }

    event.preventDefault();
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ListWithAddItem;