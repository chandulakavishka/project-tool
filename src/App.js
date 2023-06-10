import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './scences/dashboard/dashboard';
import Projects from './scences/Projects/projects';
import Modules from './scences/Modules/Modules';
import Member from './scences/Member/Member';
import Reports from './scences/Reports/Reports';
import Meetings from "./scences/Meetings/Meetings";
import JoinMeetings from "./scences/Meetings/components/JoinMeetings";
import Ratings from "./scences/Ratings/Ratings";
import NewMeeting from "./scences/Meetings/components/NewMeeting";
import SharePoints from "./scences/SharePoints/SharePoints";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/Modules' element={<Modules />} />
        <Route path='/Members' element={<Member />} />
        <Route path='/Reports' element={<Reports />} />
        {/* <Route path='/Setting' element={<Setting/>}/> */}
        <Route path='/Meetings' element={<Meetings />} />
        <Route path='/JoinMeetings' element={<JoinMeetings />} />
        <Route path='/Ratings' element={<Ratings />} />
        <Route path='/NewMeeting' element={<NewMeeting />} />
        <Route path='/SharePoints' element={<SharePoints />} />
      </Routes>
    </Router>
  );
}

export default App;
