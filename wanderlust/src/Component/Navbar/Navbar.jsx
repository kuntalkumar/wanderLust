import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>Voyawander</span>
      </div>
      <div className="menu">
        <ul>
          <li className="navList">
            <Link to="/">Home</Link>
          </li>
          <li className="navList">
            <Link to="/about">About Us</Link>
          </li>
          <li className="navList">
            <Link to="/hotels">Hotels</Link>
          </li>
          <li className="navList">
            <Link to="/flights">Flights</Link>
          </li>
          <li className="navList">
            <Link to="/holidays">Holidays</Link>
          </li>
          <li className="navList">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <AiFillCloseCircle className="icon" />
      </div>
      <button className="signUpBtn btn">Sign Up</button>

      <PiDotsNineBold className="icon" />
    </div>
  );
};

export default Navbar;
