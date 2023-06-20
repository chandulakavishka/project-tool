import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/books");
        const resData = await response.json();
        setBooks(resData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/books/${id}`, { method: "DELETE" });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <h1>Our Courses</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
          <img src={book.cover} alt="" />
          <h2>{book.title}</h2>
          <div className="buttons">
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>Update</Link>
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
