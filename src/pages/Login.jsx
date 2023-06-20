import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form">
      <h1>Login User</h1>
      <input type="text" placeholder="Add a Username" name="username" />
      <input type="number" placeholder="Add a password" name="password" />
      <button>Login</button>
      <button>
        <Link to={"/"}>Back to home</Link>
      </button>
    </div>
  );
};

export default Login;
