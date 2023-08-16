// <<<<<<< HEAD
// import logo from "./logo.svg";
// import "./App.css";
// import Payment from "./Component/Payment";
// import PlaceCard from "./Component/PlaceCard";
// import Hotel from "./Component/Hotels";
// import Details from "./Component/Details";
// =======
// import logo from './logo.svg';
import "./App.css";
// import Payment from './Component/Payment';
// import PlaceCard from './Component/PlaceCard';
// import Hotel from './Component/Hotels';

// >>>>>>> 394563e4197f31ebc3b4da23d0d0a7c760922743
// import Payment from './Component/Payment';
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

import { useRef } from "react";
import ScrollToTop from "react-scroll-to-top";

function App() {
  // Function to navigate to contact us
  const scroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const contactUs = useRef(null);
  return (
    <div className="App">
      {/* <<<<<<< HEAD */}
      <Navbar contactUs={contactUs} scroll={scroll} />
      {/* <AllRoutes /> */}

      {/* ======= */}
      <AllRoutes />
      <Footer contactUs={contactUs} scroll={scroll} />

      {/* >>>>>>> 394563e4197f31ebc3b4da23d0d0a7c760922743 */}
      {/* <Payment/>
      <PlaceCard/> */}
      {/* <Hotel/> */}
      {/* <Details/> */}
    </div>
  );
}

export default App;
