import React from "react";
import { Route, Routes } from "react-router-dom";
// <<<<<<< HEAD
import Home from "../Component/Home/Home";
import Footer from "../Component/Footer/Footer";
// import PlaceCard from "../Component/PlaceCard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/holidays" element={<PlaceCard />} /> */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
// =======
// import Hotel from "../Component/Hotels";
// import Details from "../Component/Details";
// import Payment from "../Component/Payment";

// const AllRoutes = () => {
//     return (

//         <Routes>
//         <Route exact path='/holidays' element={<PlaceCard/>} />
//         <Route exact path='/hotels' element={<Hotel/>} />
//         <Route path='/hotels/:id' element={<Details/>} />
//         <Route path='/payment' element={<Payment/>} />

//       </Routes>
//         );
//     };

//     export default AllRoutes
// >>>>>>> 394563e4197f31ebc3b4da23d0d0a7c760922743
