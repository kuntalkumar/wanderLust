import React from "react";
import { Route, Routes } from "react-router-dom";
import PlaceCard from "../Component/PlaceCard";
import Hotel from "../Component/Hotels";
import Details from "../Component/Details";
import Payment from "../Component/Payment";
import RazorpayPayment from "../Component/Payment/RazorpayPayment";


const AllRoutes = () => {
    return (

        <Routes>
        <Route exact path='/holidays' element={<PlaceCard/>} />
        <Route exact path='/hotels' element={<Hotel/>} />
        <Route path='/hotels/:id' element={<Details/>} />
        <Route path='/payment' element={<RazorpayPayment/>} />
        

        
      </Routes>
        );
    };

    export default AllRoutes    