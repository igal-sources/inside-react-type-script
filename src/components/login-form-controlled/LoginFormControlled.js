import React, { useState } from "react";
import "./login-form-controlled.css";

const CustomButton = ({ handleClick }) => {
  return (
    <button id="customButton" className="customButton" type="button" onClick={handleClick}>
      Custom Button
    </button>
  );
};

export const LoginFormControlled = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [name, setName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();

    const { id, value } = event.target;

    setForm({ ...form, [id]: value });
    console.log("form data: ", form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Submitted - Email: ${form.email} - Password: ${form.password}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={form.password} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <CustomButton handleClick={(e) => console.log("Clicked!", e.target.id)} />
    </div>
  );
};
