import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Loginform from "./login-component/loginform";
import Signup from "./signup-component/signup";
import Task from "./page-component/task";
import Test from "./page-component/test";
import ForgotPassword from "./login-component/forgotPassword"
import ResetPassword from "./login-component/resetPassword"
import CommentSection from "./comment-component/CommentForm"
import UserDashboard from "./page-component/userDashboard";
import AdminDashboard from "./page-component/adminDashboard";
import Prograss from './page-component/prograss'
import Topbar from "./global/topbar";
import jwt_decode from "jwt-decode";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState();

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
          <Route path="/" element={<Loginform userEmail={userEmail}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Task" element={<Task currentUserId={userId} userName={userName} userEmail={userEmail}/>} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/adminDashboard" element={<AdminDashboard userName={userName} userEmail={userEmail}/>} />
          <Route path="/userDashboard" element={<UserDashboard userName={userName} userEmail={userEmail}/>} />
          <Route path="/comment" element={<CommentSection />} />
          <Route path="/test" element={<Test />} />
          <Route path="/topbar" element={<Topbar />} />
          <Route path="/prograss" element={<Prograss />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
