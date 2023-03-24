import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginform from "./login-component/loginform";
import Signup from "./signup-component/signup";
import Page from "./page-component/page";
import './App.css';
import Dashboard from './scences/dashboard/dashboard';
import Projects from './scences/Projects/projects';
import Modules from './scences/Modules/Modules';
import Member from './scences/Member/Member';
import Reports from './scences/Reports/Reports';

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Loginform />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/page" element={<Page />} />
    //     </Routes>
    //   </Router>
    // </div>

    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/Modules' element={<Modules/>}/>
        <Route path='/Members' element={<Member/>}/>
        <Route path='/Reports' element={<Reports/>}/>
      </Routes>
    </Router>
  );
}

export default App;
