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
import Loginform from "./login-component/loginform";
import Signup from "./signup-component/signup";
import Task from "./page-component/task";
import Test from "./page-component/test";
import ForgotPassword from "./login-component/forgotPassword"
import ResetPassword from "./login-component/resetPassword"
import CommentSection from "./comment-component/CommentForm"
import Prograss from './prograss'
import Topbar from "./global/topbar";
import jwt_decode from "jwt-decode";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  // const logoutUser = () => {
  //   setUser(null);
  //   setIsLoggedIn(false);
  //   localStorage.removeItem("AUTH_TOKEN");
  //   window.location.replace("/login");
  // }
  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  //   if (token) {
  //     const decodedToken = jwt_decode(token);
  //     if (decodedToken.exp * 1000 < Date.now()) {
  //       setUser(null);
  //       setIsLoggedIn(false);
  //       // window.location.replace("/login");
  //     } else {
  //       setUser(decodedToken);
  //       setIsLoggedIn(true);

  //     }
  //     console.log("hello",decodedToken);
  //   }

  // }, [])


  let JwtToken =localStorage.getItem('AUTH_TOKEN');
  const decodedToken = jwt_decode(JwtToken);
   let userEmail = decodedToken.Email;
   let userName = decodedToken.UserName;
   let userId = decodedToken.Id;

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
    
          <Route path="/" element={<Loginform setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Task" element={<Task currentUserId={userId} userName={userName} userEmail={userEmail}/>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/comment" element={<CommentSection />} />
          <Route path="/test" element={<Test />} />
          <Route path="/topbar" element={<Topbar />} />
          <Route path="/prograss" element={<Prograss />} />
        </Routes>
      </Router>
    </>


  );
}

export default App;
