import React from "react";
import { useState, useEffect } from "react";

import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Login and set goals</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={email}
              placeholder="Enter Email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-block">
            Login
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
