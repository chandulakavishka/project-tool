import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Innovative from "./innovative-component/innovative";
import Task from "./Task/Task";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Innovative />} />
          <Route path="innovativetask/:id" element={<Task />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
