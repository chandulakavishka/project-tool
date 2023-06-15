import React, { useState,useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Loginform from "./login-component/loginform";
import Signup from "./signup-component/signup";
import Page from "./page-component/page";
import Test from "./page-component/test";
import ForgotPassword from "./login-component/forgotPassword"
import ResetPassword from "./login-component/resetPassword"
import CommentSection from "./comment-component/CommentForm"
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
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loginform setUser={setUser} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/page" element={<Page currentUserId={userId} userName={userName} userEmail={userEmail}/>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/comment" element={<CommentSection />} />
          <Route path="/test" element={<Test />} />
          <Route path="/topbar" element={<Topbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
