import React from "react";
import "./Portfolio.css";

// Importing Icons
import icon1 from "../../Assets/Safety and support.png";
import icon2 from "../../Assets/Diverse Destination.png";
import icon3 from "../../Assets/customer support.jpg";

import image from "../../Assets/Image.jpg";
import Reviews from "../Reviews/Reviews";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio section container">
        <div className="secContainer grid">
          <div className="leftContent">
            <div className="secHeading">
              <h3 className="h3Heading">Why Should You Choose Us</h3>
              <p className="p">
                We have extensive knowledge and experience in the travel
                industry
              </p>
            </div>

            <div className="grid">
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon1} alt="" className="iconDivImg" />
                </div>

                <div className="infor">
                  <h4 className="h4heading">Safety and support</h4>
                  <p className="p">
                    Our top priority is the safety and well-being of our
                    clients. We maintain high safety standards and have
                    emergency support.
                  </p>
                </div>
              </div>
              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon2} alt="" className="iconDivImg" />
                </div>

                <div className="infor">
                  <h4 className="h4heading">Diverse Range of Destination</h4>
                  <p>
                    Whether it's a domestic tour or an international adventure,
                    we cover a wide range of destinations to cater to different
                    interests and preferences.
                  </p>
                </div>
              </div>

              <div className="singlePortfolio flex">
                <div className="iconDiv">
                  <img src={icon3} alt="" className="iconDivImg" />
                </div>

                <div className="infor">
                  <h4 className="h4heading">24/7 Customer Support</h4>
                  <p>
                    Our dedicated customer support team is available round the
                    clock to address any queries or concerns before, during, and
                    after the trip.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rightContent">
            <img src={image} alt="" className="img"/>
          </div>
        </div>
      </div>
      <Reviews />
    </>
  );
};

export default Portfolio;
