import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    //price: null,
    cover: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Add New Innitiative</h1>
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
       <div className="add-new-dropdown">
        <select type="text" onChange={handleChange} name="year" id="Year">
          <option value="Year">Year</option>
          <option value="saab">2024</option>
          <option value="mercedes">2025</option>
          <option value="audi">2026</option>
          <option value="audi">2027</option>
          <option value="audi">2028</option>
          <option value="audi">2029</option>
          <option value="audi">2030</option>
        </select>
        <select type="text" onChange={handleChange} name="quarter" id="Quarter">
          <option value="Quarter">Quarter</option>
          <option value="volvo">1 st</option>
          <option value="saab">2 nd</option>
          <option value="mercedes">3 rd</option>
          <option value="audi">4 th</option>
        </select>
        <select type="text" onChange={handleChange} name="department" id="Department">
          <option value="Department">Department</option>
          <option value="volvo">Department - 1</option>
          <option value="saab">Department - 2</option>
          <option value="mercedes">Department - 3</option>
          <option value="audi">Department - 4</option>
        </select>
      </div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Add;
