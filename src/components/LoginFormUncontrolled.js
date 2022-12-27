import React, { useRef } from "react";

export const LoginFormUncontrolled = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    //preventDefault is called on the event when submitting the form to prevent a browser reload/refresh
    event.preventDefault();

    console.log('event: ', event.target.elements.email);

    const emailFromEvent = event.target.elements.email.value;
    const passwordFromEvent = event.target.elements.password.value;

    console.log(`Event values - Email: ${emailFromEvent} - Password: ${passwordFromEvent}`);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(`refs values - Email: ${email} - Password: ${password}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={passwordRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
