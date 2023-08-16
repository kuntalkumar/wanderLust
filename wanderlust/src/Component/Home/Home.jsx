import React from "react";
import "./Home.css";
import Video from "../../Assets/video4.mp4";
import { AiOutlineSwapRight } from "react-icons/ai";
import Middle from "../Middle/Middle";
import Portfolio from "../Portfolio/Portfolio";

// Importing Images
import image1 from "../../Assets/India gate.jpg";
import image2 from "../../Assets/Taj mahal agra.jpeg";
import image3 from "../../Assets/image3.jpeg";
import image4 from "../../Assets/image4.jpg";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="videoBg">
          <video src={Video} autoPlay loop muted className="video"></video>
        </div>

        <div className="sectionText">
          <h1 className="h1Heading">Explore the beauty of Journey</h1>
          <p className="pHeading">
            Join our community of travel enthusiasts ans discover new places,
            meet new people, and make lasting memories. Book with us and
            experience the world like never before
          </p>
          <button className="btn flex">
            Learn more <AiOutlineSwapRight className="icon" />
          </button>
        </div>

        <div className="popularPlaces">
          <div className="content">
            <h3 className="h3Heading">Popular Places</h3>
            <div className="images flex">
              <img src={image1} alt="" className="img" />
              <img src={image2} alt="" className="img" />
              <img src={image3} alt="" className="img" />
              <img src={image4} alt="" className="img" />
            </div>
          </div>
        </div>
      </div>
      <Middle />
      <Portfolio />
    </>
  );
};

export default Home;
