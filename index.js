import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rkm0762*",
  database: "courses",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

//Courses
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q =
    "INSERT INTO books (`title`, `description`, `cover`, `year`, `quarter`, `department`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.year,
    req.body.quarter,
    req.body.department,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title` = ?, `description` = ?, `cover` = ?, `year` = ?, `quarter` = ?, `department` = ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.year,
    req.body.quarter,
    req.body.department,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated successfully");
  });
});

//Users
app.get("/users", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/users", (req, res) => {
  const q =
    "INSERT INTO users (`firstname`, `lastname`, `email`, `password`, `status`, `usertype`) VALUES (?)";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.password,
    req.body.status,
    req.body.usertype,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const q = "DELETE FROM users WHERE id = ?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.json(err);
    return res.json("User has been deleted successfully");
  });
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const q =
    "UPDATE users SET `firstname` = ?, `lastname` = ?, `email` = ?, `password` = ?, `status` = ?, `usertype` = ? WHERE id = ?";
  const values = [
    req.body.name,
    req.body.lastname,
    req.body.email,
    req.body.password,
    req.body.status,
    req.body.usertype
  ];

  db.query(q, [...values, userId], (err, data) => {
    if (err) return res.json(err);
    return res.json("User has been updated successfully");
  });
});

app.listen(5000, () => {
  console.log("Connected to the server");
});




