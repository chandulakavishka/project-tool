import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    status: "",
    usertype: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        const resData = await response.json();
        setUsers(resData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <div className="form">
      <h1>Add New User</h1>
      <input
        type="text"
        placeholder="Add a Username"
        name="firstname"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Add a Lastname"
        name="lastname"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Add an email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Add a password"
        name="password"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Status"
        name="status"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="usertype"
        name="usertype"
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Register</button>
      <button>
        <Link to={"/"}>Back to home</Link>
      </button>
      <div className="enrolled-users">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Usertype</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>{user.usertype}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Register;
