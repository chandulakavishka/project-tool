import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Innovative from "./innovative-component/innovative";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Innovative/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
