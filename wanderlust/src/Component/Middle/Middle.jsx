import React from "react";
import "./Middle.css";
import Destination from "../Destination/Destination";

const Middle = () => {
  return (
    <>
      <div className="middle section">
        <div className="secContainer container">
          <div className="grid">
            <span className="flex">
              <h1 className="h1Font">10</h1>
              <p className="pFont">World of Experiences</p>
            </span>

            <span className="flex">
              <h1 className="h1Font">2k+</h1>
              <p className="pFont">Fine Destination</p>
            </span>

            <span className="flex">
              <h1 className="h1Font">10k+</h1>
              <p className="pFont">Customer Services</p>
            </span>

            <span className="flex">
              <h1 className="h1Font">4.8</h1>
              <p className="pFont">Overall Rating</p>
            </span>
          </div>
        </div>
      </div>
      <Destination />
    </>
  );
};

export default Middle;
