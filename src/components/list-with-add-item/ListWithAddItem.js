import React, { useState } from "react";
import { ListItem } from "./list-item/ListItem";
import { FormAddItem } from "./form-add-item/FormAddItem";
import "./list-with-add-item.css";

const InitialList = [
  { id: 1, name: "Learn CSS" },
  { id: 2, name: "Learn HTML" },
  { id: 3, name: "Learn JavaScript" },
  { id: 4, name: "Learn React" },
  { id: 5, name: "Learn TypeScript" },
];

export const ListWithAddItem = () => {
  const [list, setList] = useState(InitialList);

  const getMaxId = () => {
    const maxId = Math.max(...list.map((item) => item.id));
    return maxId + 1;
  };

  const handleSubmit = (event, value) => {
    event.preventDefault();

    if (value) {
      setList([...list, { id: getMaxId(), name: value }]);      
      console.log("list: ", list);
    }
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
      <FormAddItem onSubmit={handleSubmit} />
    </div>
  );
};

export default ListWithAddItem;
