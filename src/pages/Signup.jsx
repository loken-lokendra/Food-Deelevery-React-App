import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/signup", { name, email, password })
      .then((result) => {
        if (result.data === "exist") {
          alert("User already exists");
        } else if (result.data === "notexist") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <div className="form-div">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>SignUp</h1>

          <div className="form">
            <label htmlFor="">Name</label>

            <input
              className="inp"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="">Email</label>

            <input
              className="inp"
              type="email"
              name="username"
              placeholder="Email"
              
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="">Password</label>

            <input
              className="inp"
              type="password"
              name="password"
              placeholder="Password"
              
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <button className="btn" type="submit">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
