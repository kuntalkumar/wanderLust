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
<<<<<<< HEAD
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

import { useRef } from "react";
import ScrollToTop from "react-scroll-to-top";
=======
import AllRoutes from './Routes/AllRoutes'
import RazorpayPayment from './Component/Payment/RazorpayPayment';
>>>>>>> 3fa7f3b147950fba745101ff9682c5400b1f788e

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
<<<<<<< HEAD
      {/* <<<<<<< HEAD */}
      <Navbar contactUs={contactUs} scroll={scroll} />
      {/* <AllRoutes /> */}

      {/* ======= */}
      <AllRoutes />
      <Footer contactUs={contactUs} scroll={scroll} />

      {/* >>>>>>> 394563e4197f31ebc3b4da23d0d0a7c760922743 */}
=======
      <AllRoutes/>
<<<<<<< Updated upstream
    
=======
   {/* <h1>Hi i am ready</h1> */}
>>>>>>> Stashed changes
>>>>>>> 3fa7f3b147950fba745101ff9682c5400b1f788e
      {/* <Payment/>
      <PlaceCard/> */}
      {/* <Hotel/> */}
      {/* <Details/> */}
      {/* <RazorpayPayment/> */}
    </div>
  );
}

export default App;
