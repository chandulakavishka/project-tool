import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div>
      <div class="header">
        <a href="#default" class="logo">
          Super Admin
        </a>
        <div class="header-right">
          <a class="active" href="/">
           Innovative Category
           
          </a>
          <a href="/add">Add New Innovative Category</a>
          <a href="/register">Add Users</a>
          <a href="/users">Users</a>
          <a href="/login">Login</a>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
