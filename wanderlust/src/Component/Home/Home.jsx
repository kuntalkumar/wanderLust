import React from "react";
import "./Home.css";
import Video from "../../Assets/video1.mp4";
import { AiOutlineSwapRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted className="video"></video>
      </div>

      <div className="sectionText">
        <h1 className="h1Heading">Explore the beaury of Journey</h1>
        <p className="pHeading">
          Join our community of travel enthusiasts ans discover new places, meet
          new people, and make lasting memories. Book with us and experience the
          world like never before
        </p>
        <button className="btn flex">
          Learn more <AiOutlineSwapRight className="icon" />
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3>Po;ular Places</h3>
          <div className="images flex">
            {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
