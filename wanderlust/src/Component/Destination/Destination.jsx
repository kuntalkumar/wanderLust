import React from "react";
import "./Destination.css";
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill, BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

// Images imported
import Destination1 from "../../Assets/Destination1.jpg";
import TajMahal from "../../Assets/Taj Mahal.jpg";
import GNP from "../../Assets/Glacier National Park.jpg";
import Bali from "../../Assets/Bali.jpg";
import Kerry from "../../Assets/Kerry.jpg";
import Dubrovnik from "../../Assets/Dubrovnik.jpg";
import ParoValley from "../../Assets/Paro Valley.jpg";
import Havana from "../../Assets/havana.png";
import Portfolio from "../Portfolio/Portfolio";

// destination Array
const destinations = [
  {
    id: 1,
    img: Destination1,
    name: "Maldives Island",
    location: "Maldives",
    rating: 4.7,
  },
  {
    id: 2,
    img: TajMahal,
    name: "Taj Mahal",
    location: "Agra, India",
    rating: 4.9,
  },
  {
    id: 3,
    img: GNP,
    name: "Glacier National Park",
    location: "Montana, USA",
    rating: 4.8,
  },
  {
    id: 4,
    img: Bali,
    name: "Bali",
    location: "Bali, Indonasia",
    rating: 4.8,
  },
  {
    id: 5,
    img: Kerry,
    name: "Kerry",
    location: "Kerry, Ireland",
    rating: 4.4,
  },
  {
    id: 6,
    img: Dubrovnik,
    name: "Dubrovnik",
    location: "Dubrovnik, Croatia",
    rating: 4.7,
  },
  {
    id: 7,
    img: ParoValley,
    name: "Paro Valley",
    location: "Bhutan",
    rating: 4.6,
  },
  {
    id: 8,
    img: Havana,
    name: "Havana",
    location: "Havana, Cuba",
    rating: 4.9,
  },
];

const Destination = () => {
  return (
    <>
      <div className="destination section container">
        <div className="secContainer">
          <div className="secTitle">
            <span className="redText">EXPLORE NOW</span>
            <h3 className="h3Heading">Find Your Dream Destination</h3>
            <p className="secTitlep">
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
              <li className="active li">All</li>
              <li className="li">Recommended</li>
              <li className="li">Beach</li>
              <li className="li">Park</li>
              <li className="li">Nature</li>
              <li className="li">Mountain</li>
            </ul>
          </div>
          <div className="destinationContainer grid">
            {destinations?.map((destination) => {
              return (
                <div className="singleDestination" id={destination.id}>
                  <div className="imgDiv">
                    <img
                      src={destination.img}
                      alt="Destination"
                      className="img"
                    />
                    <div className="descInfo flex">
                      <div className="text">
                        <span className="name">{destination.name}</span>
                        <p className="flex">
                          <TiLocation className="icon" />
                          {destination.location}
                        </p>
                      </div>
                      <span className="rating">{destination.rating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Portfolio /> */}
    </>
  );
};

export default Destination;
