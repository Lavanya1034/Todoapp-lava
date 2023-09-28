import React from "react";
import { useState } from "react";
import "./Login.css";
import loginCredentials from "./LoginCredentials.json";
import { useLocation, useNavigate } from "react-router-dom";


function Login(props) {
  let credentials1 = props.credentials;
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location);
  console.log(location.pathname);
  console.log(location.search);
  if(!location.pathname){
    location.pathname="/";
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  function handleSubmit(e) {
    e.preventDefault();

    if (
      loginCredentials.email === email &&
      loginCredentials.password === password
    ) {
      //credentials1(true);
      navigate("/Home",true)
    }else{
      alert("Invalid credentials!!!Please enter valid credentials")
    }
  }

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="form-sec">
      <form onSubmit={handleSubmit} className="form">
        <h1>Todo</h1>
        <h3>Login</h3>
        <label className="labelEdit" htmlFor="name">Email:</label>
        <input
          id="name"
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={email}
          
        />
        <label className="labelEdit" htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={password}
      
        />
        <button className="btn btn-primary" id="sub" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
