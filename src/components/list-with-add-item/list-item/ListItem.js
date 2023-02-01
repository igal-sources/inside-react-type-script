import React from "react";

export const ListItem = ({ item }) => {
  return (
    <div>
      <li key={item.id}>{item.name}</li>
    </div>
  );
};
