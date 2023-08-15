import React from "react";
import { Route, Routes } from "react-router-dom";
import PlaceCard from "../Component/PlaceCard";
import Hotel from "../Component/Hotels";


const AllRoutes = () => {
    return (

        <Routes>
        <Route exact path='/holidays' element={<PlaceCard/>} />
        <Route exact path='/hotels' element={<Hotel/>} />
        
        

        
      </Routes>
        );
    };

    export default AllRoutes    