import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginform from "./login-component/loginform";
import Signup from "./signup-component/signup";
import Page from "./page-component/page";

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </Router>
    </div>
=======
  <div className= "App">
    
    <Signup/>
  </div>
   
>>>>>>> Stashed changes
  );
}

export default App;
