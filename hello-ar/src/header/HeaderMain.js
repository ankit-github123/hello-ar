import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderDescription from "./HeaderDescription";
import User from "./User";
import "./header.css"
export default function HeaderMain() {
  return (
    <div className="header_container">
        <div className="header_logo_container">
        <HeaderLogo />
        <HeaderDescription />
        </div>
      <div className="user_main">
      <User />
      </div>
      
    </div>
  );
}
