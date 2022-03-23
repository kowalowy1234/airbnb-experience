import React from "react";
import logo from "../Images/airbnb-logo.png";

const nav_width = {
    alignSelf: 'stretch',
  };

export default function Navbar(){
  
  return(
    <nav className="nav" style={nav_width}>
      <img className="nav--airbnb-logo" src={logo} alt="airbnb-logo" />
    </nav>
  );
}