import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const location = useLocation();
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });
  const [students, setStudents] = useState([]);
  const courseId = location.pathname.split("/")[2];
  const [student, setStudent] = useState({
    name: "",
    lastname: "",
    courseId
  });
  const navigate = useNavigate();
  const bookId = location.pathname.split("/")[2];

  console.log(courseId);
  
  //Books
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/books/" + bookId, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //Students

  const handleAddStudents = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/students/create", student);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getStudents = async () => {
    try {
      const response = await fetch("http://localhost:5000/students/");
      const resData = await response.json();
      setStudents(resData);
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);


  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="Add a Title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Add a Description"
        name="description"
        onChange={handleChange}
      />
      
      <input
        type="text"
        placeholder="Add a Cover Page"
        name="cover"
        onChange={handleChange}
      />
        <button onClick={handleAddStudents} className="update">
          Add
        </button>
      <button className="update-btn" onClick={handleAdd}>
        Update
      </button>
      </div>
  );
};

export default Update;
