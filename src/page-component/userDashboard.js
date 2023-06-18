import React from 'react'
import Topbar from "../global/topbar";
import Test from "./test";

const userDashboard = ({userName, userEmail }) => {
  return (
    <div>
        <Test/>
        <Topbar userName={userName} userEmail={userEmail} />
        <center>
            <br/><br/>
        <h2>UserDashboard</h2>
        </center>
    </div>
  )
}

export default userDashboard