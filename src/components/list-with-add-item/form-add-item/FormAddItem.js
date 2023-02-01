import React, { useState } from "react";

export const FormAddItem = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onFormSubmit = (e, value) => {
    onSubmit(e, value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={(e) => onFormSubmit(e, value)}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};
