import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Loginform from "./login-component/loginform";
import Signup from "./signup-component/signup";
import Page from "./page-component/page";
import Test from "./page-component/test";
import Verify from "./signup-component/verify"
import ForgotPassword from "./login-component/forgotPassword"
import ResetPassword from "./login-component/resetPassword"
import CommentSection from "./comment-component/CommentForm"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Loginform />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/page" element={<Page />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/comment" element={<CommentSection currentUserId="1"  />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
