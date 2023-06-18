import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Projects from './scences/Projects/projects';
import Modules from './scences/Modules/Modules';
import Member from './scences/Member/Member';
import Reports from './scences/Reports/Reports';
import { Setting } from "./scences/Setting/Setting";
import Profile from "./scences/Profile/Profile";
import Dashboard from "./scences/dashboard/dashboard";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/Modules' element={<Modules/>}/>
        <Route path='/Members' element={<Member/>}/>
        <Route path='/Reports' element={<Reports/>}/>
        <Route path='/Setting' element={<Setting/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </>


  );
}

export default App;
