import { useState } from "react";
import { Navigate } from "react-router-dom";
import React from "react";

import HeaderTest from "./test_head";

export default function Signup() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  if (formSubmitted) {
    return <Navigate to={"/login"} />;
  }

  const handleSubmit = function (event) {
    event.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <div>
      <HeaderTest />
      <form onSubmit={handleSubmit}>
        <div className="names">
          {" "}
          <div>
            <label htmlFor="firstname">First name</label>
            <input name="firstname" type="text" />
          </div>
          <div>
            <label htmlFor="lastname">Last name</label>
            <input name="lastname" type="text" />
          </div>
        </div>
        <label htmlFor="email">Email address</label>
        <br />
        <input name="email" type="email" /> <br />
        <label htmlFor="password">Password</label>
        <br />
        <input name="password" type="password" />
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
