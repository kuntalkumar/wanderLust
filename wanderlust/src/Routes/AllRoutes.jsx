import React from "react";
import { Route, Routes } from "react-router-dom";
import PlaceCard from "../Component/PlaceCard";
import Hotel from "../Component/Hotels";
import Home from "../Component/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;
