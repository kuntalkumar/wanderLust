import React from "react";
import "./Reviews.css";

// Importing Icons
import { AiFillStar } from "react-icons/ai";

// Importing Client Images
import client1 from "../../Assets/DP1.jpg";
import fun from "../../Assets/fun.jpg";
import Questions from "../Questions/Questions";

const Reviews = () => {
  return (
    <>
      <div className="review section">
        <div className="secContainer grid">
          <div className="textDiv">
            <span className="redText">FROM OUR CLIENTS</span>
            <h3 className="h3">Real Travel History From Our Beloved Clients</h3>
            <p className="p">
              By choosing us as their tour agency, customers can expect an
              enriching and enjoyable travel experience, filled with
              unforgettable memories that will last a lifetime.
            </p>
            <span className="stars flex">
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
            </span>

            <div className="clientsImages flex">
              <img src={client1} alt="Kamlesh Bhatt" className="img" />
              <img src={client1} alt="Kamlesh Bhatt" className="img" />
              <img src={client1} alt="Kamlesh Bhatt" className="img" />
              <img src={client1} alt="Kamlesh Bhatt" className="img" />
              <img src={client1} alt="Kamlesh Bhatt" className="img" />
            </div>
          </div>

          <div className="imgDiv">
            <img src={fun} alt="Kamlesh Bhatt" className="imgDivImg" />
          </div>
        </div>
      </div>
      <Questions />
    </>
  );
};

export default Reviews;
