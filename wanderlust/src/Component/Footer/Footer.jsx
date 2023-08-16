import React from "react";
import "./Footer.css";
import ScrollToTop from "react-scroll-to-top";
import { useRef } from "react";

// Importing logo
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = ({ contactUs, scroll }) => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <BiLogoMediumOld className="icon" />
            <span>Voyawander</span>
          </div>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillLinkedin className="icon" />
            <a
              href="https://github.com/kuntalkumar/wanderLust"
              target="_blank"
              rel="noreferrer">
              <AiFillGithub className="icon" />
            </a>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li className="li">
            <a href="#" className="a">
              Home
            </a>
          </li>
          <li className="li">
            <a href="#" className="a">
              About Us
            </a>
          </li>
          <li className="li">
            <a href="#" className="a">
              Hotels
            </a>
          </li>
          <li className="li">
            <a href="#" className="a">
              Flights
            </a>
          </li>
          <li className="li">
            <a href="#" className="a">
              Contact Us
            </a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li className="li">
            <a href="#" className="a">
              Destination
            </a>
          </li>
          <li className="li">
            <a href="#" className="a">
              Support
            </a>
          </li>
          <li className="li">
            <a href="#" className="a">
              Travel & Condition
            </a>
          </li>
          <li className="li">
            <a href="#" className="a">
              Privacy
            </a>
          </li>
        </div>

        <div className="footerLinks" ref={contactUs}>
          <span className="linkTitle">Contach Us</span>
          <span className="phone">+91 98765 43210</span>
          <span className="email">contact@voyawander.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
