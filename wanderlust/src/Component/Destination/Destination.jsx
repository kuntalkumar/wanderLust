import React from "react";
import "./Destination.css";
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill, BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

// Images imported
import Destination1 from "../../Assets/Destination1.jpg";

const Destination = () => {
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="">
          <span className="redText">EXPLORE NOW</span>
          <h3 className="h3Heading">Find Your Dream Destination</h3>
          <p>
            Fill in the fields below to find the best sopt for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" className="input" />
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="number" placeholder="Budget" className="input" />
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="date" placeholder="Date" className="input" />
          </div>

          <button className="btn flex">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>
        <div className="secMenu">
          <ul className="flex">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>
        <div className="destinationContainer grid">
          <div className="singleDestination">
            <div className="imgDiv">
              <img src={Destination1} alt="Destination" />
              <div className="descInfo flex">
                <div className="text">
                  <span className="name">Maldives Island</span>
                  <p className="flex">
                    <TiLocation className="icon" />
                    Maldives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
