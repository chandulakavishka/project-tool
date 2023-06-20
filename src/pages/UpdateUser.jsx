import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    status: "",
    usertype: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/users/" + userId, user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

//   useEffect((userId) => {
//     const fetchCurrentUser = async () => {
//       await axios
//         .get(`http://localhost:5000/users/${userId}`)
//         .then((resp) => resp.json())
//         .then((data) => setUser(data));
//     };
//     fetchCurrentUser(userId);
//   }, []);

  return (
    <div className="form">
      <h1>Update the User</h1>
      <input
        type="text"
        placeholder="Add a Name"
        name="name"
        onChange={handleChange}
        value={user.name}
      />
      <input
        type="text"
        placeholder="Add a Lastname"
        name="lastname"
        onChange={handleChange}
        value={user.lastname}
      />
      <input
        type="text"
        placeholder="Add an Email"
        name="email"
        onChange={handleChange}
        value={user.email}
      />
      <input
        type="text"
        placeholder="Add User Status"
        name="status"
        onChange={handleChange}
        value={user.status}
      />
      <input
        type="text"
        placeholder="Add Usertype"
        name="usertype"
        onChange={handleChange}
        value={user.usertype}
      />
      <button className="update-btn" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
};

export default UpdateUser;
