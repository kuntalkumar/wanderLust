import React from "react";
import "./Accordion.css";

// Importing Icons
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const Accordion = ({ title, desc, active, setActive }) => {
  return (
    <div className="accordionContainer">
      <span
        className={
          (active === title ? "activeTitle" : "") + " title" + " flex"
        }>
        {title}
        <span
          className="iconTitle"
          onClick={() => {
            setActive(title);
          }}>
          {active === title ? (
            <BsArrowDownCircle className="icon" />
          ) : (
            <BsArrowUpCircle className="icon" />
          )}
        </span>
      </span>
      <p className={(active === title ? "show" : "") + " description"}>
        {desc}
      </p>
    </div>
  );
};

export default Accordion;
