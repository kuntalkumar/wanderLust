import React from "react";
import "./Subscribe.css";

// Importing Images
import image from "../../Assets/lady calling.jpg";
import Footer from "../Footer/Footer";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe section container">
        <div className="secContainer grid">
          <img src={image} alt="" />

          <div className="textDiv">
            <h4 className="h4">Best Way To Start Your Journey!</h4>
            <p className="p">
              Embark on unforgettable adventures with our expertly crafted
              travel plans - the ultimate way to begin your extraordinary
              journey.
            </p>
            <button className="btn">Start Here</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscribe;
