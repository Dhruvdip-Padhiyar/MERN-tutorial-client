import React from "react";
import { useState, useEffect } from "react";

import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (event) => {
      setFormData((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
  }
  const onSubmit = (event) => {
      event.preventDefault();
  }


  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Create an Account</p>
      </section>
      <section className="form">
          <form onSubmit={onSubmit}>
              <div className="form-group">
          <label>Name:
              </label>
                  <input type="text" className="form-control" name="name" id="name" value={name} placeholder="Enter Your Name" onChange={onChange}/>
              </div>
              <div className="form-group">
          <label>Email:
              </label>
                  <input type="text" className="form-control" name="email" id="email" value={email} placeholder="Enter Email" onChange={onChange}/>
              </div>
              <div className="form-group">
          <label>Password:
              </label>
                  <input type="password" className="form-control" name="password" id="password" value={password} placeholder="Enter password" onChange={onChange}/>
              </div>
              <div className="form-group">
          <label>Confirm Password:
              </label>
                  <input type="password" className="form-control" name="password2" id="password2" value={password2} placeholder="Confirm password" onChange={onChange}/>
              </div>
                <button type="submit" className="btn btn-block">Submit</button>
          </form>
      </section>
    </>
  );
}

export default Register;
